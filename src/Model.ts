import { SdkConfiguration } from './SdkConfiguration';
import { SdkClient } from './SdkClient';
import { ApiException } from "./ApiException";

class Model {
    private readonly _sdkClient: SdkClient;

    constructor(configuration: SdkConfiguration) {
        this._sdkClient = new SdkClient(configuration);
    }

    public async getApiResponse(endpoint: string): Promise<string | null> {
        try {
            const response = await this._sdkClient.getApiResponseAsync(endpoint);
            return response;
        } catch (ex) {
            if (ex instanceof ApiException) {
                // Handle API exception
                console.log('API Error:', ex.message);
            } else {
                // Handle general exception
                console.log('Error:', ex.message);
            }
            return null;
        }
    }
}

export { Model };