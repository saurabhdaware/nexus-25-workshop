import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import path from "path";
import { z } from "zod";
import fs from "fs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Create an MCP server
const server = new McpServer({
  name: "nexus-library-mcp",
  version: "1.0.0",
});

const validComponents = ["Box", "Button"];

// Add an addition tool
server.registerTool(
  "get_component_docs",
  {
    title: "Get Component Docs",
    description:
      "Returns the documentation for the given comma separated list of components. ALWAYS use this for understanding componenents before generating UI",
    inputSchema: {
      componentNames: z
        .string()
        .describe(
          `Comma separated list of components. E.g. 'Box, Button'. Possible Components: ${validComponents.join(
            ", "
          )}`
        ),
    },
  },
  async ({ componentNames }) => {
    // check if componentNames is a valid list of components
    const componentNamesList = componentNames.split(",");
    const invalidComponents = componentNamesList.filter(
      (name) => !validComponents.includes(name.trim())
    );
    if (invalidComponents.length > 0) {
      return {
        content: [
          {
            type: "text",
            text: `Invalid components: ${invalidComponents.join(
              ", "
            )}. Valid components: ${validComponents.join(", ")}`,
          },
        ],
      };
    }

    const componentDocs = componentNames.split(",").map((name) => {
      const response = fs.readFileSync(
        path.join(__dirname, `knowledgebase/${name.trim()}.md`),
        "utf8"
      );
      return {
        name,
        docs: response,
      };
    });

    return {
      content: [
        { type: "text", text: componentDocs.map((doc) => doc.docs).join("\n") },
      ],
    };
  }
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
