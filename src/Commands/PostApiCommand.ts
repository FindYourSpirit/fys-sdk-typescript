import fetch, { RequestInit, Response } from 'node-fetch';
import { IApiCommand } from './src/Interfaces/IApiCommand';
import { SdkConfiguration } from '/src/SdkConfiguration';

class PostApiCommand implements IApiCommand {
    private readonly _configuration: SdkConfiguration;

    constructor(configuration: SdkConfiguration) {
        this._configuration = configuration;
    }

    public async executeAsync(endpoint: string, content: RequestInit): Promise<string> {
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Authorization': this._configuration.apiKey,
                'JwtToken': this._configuration.jwtToken,
                'Content-Type': 'application/json' // Adjust the content type as per your needs
            },
            body: JSON.stringify(content) // Adjust the body serialization as per your needs
        };

        const response: Response = await fetch(endpoint, requestOptions);
        return await this.handleResponseAsync(response);
    }

    private async handleResponseAsync(response: Response): Promise<string> {
        if (response.ok) {
            const responseData: string = await response.text();
            return responseData;
        } else {
            const errorContent: string = await response.text();
            throw new Error(`Error occurred while making API request. Status Code: ${response.status}. Response: ${errorContent}`);
        }
    }

    public dispose(): void {
        // Implement dispose logic if needed
    }
}

export { PostApiCommand };
