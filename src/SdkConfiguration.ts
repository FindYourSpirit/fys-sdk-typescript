enum EnvironmentType {
    Live = 'Live',
    Test = 'Test'
}

class SdkConfiguration {
    public ApiKey: string;
    public Environment: EnvironmentType;
    public JwtToken: string;
    public ClientID: string;
    public Version: string;

    constructor(apiKey: string, environment: EnvironmentType, jwtToken: string, clientID: string, version: string) {
        this.ApiKey = apiKey;
        this.Environment = environment;
        this.JwtToken = jwtToken;
        this.ClientID = clientID;
        this.Version = version;
    }

    public GetBaseUrl(): string {
        switch (this.Environment) {
            case EnvironmentType.Live:
                return `https://api.live.fysapp.co/${this.Version}`;
            case EnvironmentType.Test:
                return `https://api.test.fysapp.co/${this.Version}`;
            default:
                throw new Error('Invalid environment specified.');
        }
    }
}

export { SdkConfiguration, EnvironmentType };
