import got from 'got';

const response = await got.patch('http://localhost:28139/go/api/agents/adb9540a-b954-4571-9d9b-2f330739d4da', {
    headers: {
        'Accept': 'application/vnd.go.cd.v4+json',
        'Content-Type': 'application/json'
    },
    username: 'username',
    password: 'password',
    // body: '{\n        "hostname": "agent02.example.com",\n        "agent_config_state": "Enabled",\n        "resources": ["Java","Linux"],\n        "environments": ["Dev"]\n        }',
    json: {
        'hostname': 'agent02.example.com',
        'agent_config_state': 'Enabled',
        'resources': [
            'Java',
            'Linux'
        ],
        'environments': [
            'Dev'
        ]
    }
});
