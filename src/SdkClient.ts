import { SdkConfiguration } from './SdkConfiguration';
import { GetApiCommand } from './GetApiCommand';
import { PostApiCommand } from './PostApiCommand';
// Import additional command classes for other HTTP methods as needed

interface IDisposable {
    dispose(): void;
}

class SdkClient implements IDisposable {
    private readonly _configuration: SdkConfiguration;
    private readonly _getCommand: GetApiCommand;
    private readonly _postCommand: PostApiCommand;
    // Instantiate additional command classes for other HTTP methods as needed

    constructor(configuration: SdkConfiguration) {
        this._configuration = configuration;
        this._getCommand = new GetApiCommand(configuration);
        this._postCommand = new PostApiCommand(configuration);
        // Instantiate additional command classes for other HTTP methods as needed
    }

    public async getApiResponseAsync(endpoint: string): Promise<string> {
        return await this._getCommand.executeAsync(endpoint, null);
    }

    public async postApiResponseAsync(endpoint: string, content: any): Promise<string> {
        return await this._postCommand.executeAsync(endpoint, content);
    }

    // Add additional methods for other HTTP methods using the respective command classes

    public dispose(): void {
        this._getCommand.dispose();
        this._postCommand.dispose();
        // Dispose of additional command instances as needed
    }
}

export { SdkClient };
