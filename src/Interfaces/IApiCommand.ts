import { RequestInit } from 'node-fetch'; // Import the appropriate 'fetch' library

interface IApiCommand {
    executeAsync(endpoint: string, content?: RequestInit): Promise<string>;
}
