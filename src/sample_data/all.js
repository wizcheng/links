export default [[{
    "hostname": "localhost",
    "environment": "DEV",
    "system": "4SecTimeout",
    "status-url": "http://localhost:8000/requestTimeout4s",
    "config": {"system": "4SecTimeout", "url": "http://%hostname%:8000/requestTimeout4s"},
    "index": 12
}, {"color": "green", "message": "OK"}], [{
    "hostname": "localhost",
    "environment": "UAT",
    "system": "503WithJson",
    "status-url": "http://localhost:8000/jsonVia503",
    "config": {
        "system": "503WithJson",
        "url": "http://%hostname%:8000/jsonVia503",
        "color": "color",
        "components": {"json-path": "$.components"},
        "known-status-codes": [200, 503]
    },
    "index": 15
}, {
    "color": "red",
    "message": [],
    "package-version": null,
    "components": [{"color": "green", "name": "components 0", "message": null}]
}], [{
    "hostname": "localhost",
    "environment": "UAT",
    "system": "5SecTimeout",
    "status-url": "http://localhost:8000/requestTimeout5s",
    "config": {"system": "5SecTimeout", "url": "http://%hostname%:8000/requestTimeout5s"},
    "index": 13
}, {"color": "green", "message": "OK"}], [{
    "hostname": "localhost",
    "environment": "DEV",
    "system": "ComplexSystemStatus",
    "status-url": "http://localhost:8000/complex.json",
    "config": {
        "system": "ComplexSystemStatus",
        "url": "http://%hostname%:8000/complex.json",
        "package-version": "package-version",
        "color": {"json-path": "$.status.main[0]", "green-value": "healthy", "yellow-value": "warning"}
    },
    "index": 8
}, {
    "color": "green",
    "message": [],
    "package-version": "complex-1.2.0.rc1",
    "components": null
}], [{
    "hostname": "localhost",
    "environment": "DEV",
    "system": "ComponentStatuses",
    "status-url": "http://localhost:8000/component_status.json",
    "config": {
        "system": "ComponentStatuses",
        "url": "http://%hostname%:8000/component_status.json",
        "color": "color",
        "message": "message",
        "package-version": "package-version",
        "components": {"json-path": "$.subSystems", "color": "status", "name": "name", "message": "description"}
    },
    "index": 9
}, {
    "color": "yellow",
    "message": ["Job unhappy"],
    "package-version": "component-statuses-0.1.0",
    "components": [{
        "color": "green",
        "name": "I am a dependant system with a very long name",
        "message": "Operational"
    }, {"color": "green", "name": "Another green system", "message": ""}, {
        "color": "yellow",
        "name": "Another system ᶘᵒᴥᵒᶅ",
        "message": "No up-to-date information"
    }, {"color": "red", "name": "Another red system", "message": ["Broken", "Error"]}, {
        "color": "red",
        "name": "More red",
        "message": "Connection timeout"
    }, {"color": "yellow", "name": "Yellow system", "message": ""}, {
        "color": "red",
        "name": "Yet another red system",
        "message": ""
    }, {"color": "red", "name": "I am a red system", "message": ""}, {
        "color": "green",
        "name": "I am a green system",
        "message": ""
    }, {"color": "yellow", "name": "I am a yellow system", "message": ""}, {
        "color": "green",
        "name": "I am yet another green system",
        "message": ""
    }, {"color": "yellow", "name": "I am yet another yellow system", "message": ""}, {
        "color": "red",
        "name": "I am yet another red system",
        "message": ""
    }]
}], [{
    "hostname": "localhost",
    "environment": "UAT",
    "system": "ComponentStatuses",
    "status-url": "http://localhost:8000/component_status.json",
    "config": {
        "system": "ComponentStatuses",
        "url": "http://%hostname%:8000/component_status.json",
        "color": "color",
        "message": "message",
        "package-version": "package-version",
        "components": {"json-path": "$.subSystems", "color": "status", "name": "name", "message": "description"}
    },
    "index": 10
}, {
    "color": "yellow",
    "message": ["Job unhappy"],
    "package-version": "component-statuses-0.1.0",
    "components": [{
        "color": "green",
        "name": "I am a dependant system with a very long name",
        "message": "Operational"
    }, {"color": "green", "name": "Another green system", "message": ""}, {
        "color": "yellow",
        "name": "Another system ᶘᵒᴥᵒᶅ",
        "message": "No up-to-date information"
    }, {"color": "red", "name": "Another red system", "message": ["Broken", "Error"]}, {
        "color": "red",
        "name": "More red",
        "message": "Connection timeout"
    }, {"color": "yellow", "name": "Yellow system", "message": ""}, {
        "color": "red",
        "name": "Yet another red system",
        "message": ""
    }, {"color": "red", "name": "I am a red system", "message": ""}, {
        "color": "green",
        "name": "I am a green system",
        "message": ""
    }, {"color": "yellow", "name": "I am a yellow system", "message": ""}, {
        "color": "green",
        "name": "I am yet another green system",
        "message": ""
    }, {"color": "yellow", "name": "I am yet another yellow system", "message": ""}, {
        "color": "red",
        "name": "I am yet another red system",
        "message": ""
    }]
}], [{
    "hostname": "localhost",
    "environment": "PROD",
    "system": "ComponentStatuses",
    "status-url": "http://localhost:8000/component_status.json",
    "config": {
        "system": "ComponentStatuses",
        "url": "http://%hostname%:8000/component_status.json",
        "color": "color",
        "message": "message",
        "package-version": "package-version",
        "components": {"json-path": "$.subSystems", "color": "status", "name": "name", "message": "description"}
    },
    "index": 11
}, {
    "color": "yellow",
    "message": ["Job unhappy"],
    "package-version": "component-statuses-0.1.0",
    "components": [{
        "color": "green",
        "name": "I am a dependant system with a very long name",
        "message": "Operational"
    }, {"color": "green", "name": "Another green system", "message": ""}, {
        "color": "yellow",
        "name": "Another system ᶘᵒᴥᵒᶅ",
        "message": "No up-to-date information"
    }, {"color": "red", "name": "Another red system", "message": ["Broken", "Error"]}, {
        "color": "red",
        "name": "More red",
        "message": "Connection timeout"
    }, {"color": "yellow", "name": "Yellow system", "message": ""}, {
        "color": "red",
        "name": "Yet another red system",
        "message": ""
    }, {"color": "red", "name": "I am a red system", "message": ""}, {
        "color": "green",
        "name": "I am a green system",
        "message": ""
    }, {"color": "yellow", "name": "I am a yellow system", "message": ""}, {
        "color": "green",
        "name": "I am yet another green system",
        "message": ""
    }, {"color": "yellow", "name": "I am yet another yellow system", "message": ""}, {
        "color": "red",
        "name": "I am yet another red system",
        "message": ""
    }]
}], [{
    "hostname": "localhost",
    "environment": "DEV",
    "system": "ComponentsOnly",
    "status-url": "http://localhost:8000/components_only.json",
    "config": {
        "system": "ComponentsOnly",
        "url": "http://%hostname%:8000/components_only.json",
        "components": {"json-path": "$[?(@.status)]", "color": "status"}
    },
    "index": 7
}, {
    "color": "yellow",
    "message": [],
    "package-version": null,
    "components": [{"color": "green", "name": "greenSystem", "message": null}, {
        "color": "yellow",
        "name": "yellowSystem",
        "message": null
    }]
}], [{
    "hostname": "localhost",
    "environment": "PROD",
    "system": "SystemMissingColor",
    "status-url": "http://localhost:8000/red.json",
    "config": {
        "system": "SystemMissingColor",
        "url": "http://%hostname%:8000/red.json",
        "color": "color",
        "message": "message",
        "package-version": "package-version"
    },
    "index": 4
}, {
    "color": "red",
    "message": ["greenyet: Cannot read color for config 'color'", "Database connection timeout"],
    "package-version": "system-status-red-1.2.0.rc1",
    "components": null
}], [{
    "hostname": "localhost",
    "environment": "PROD",
    "system": "SystemStatusYellow",
    "status-url": "http://localhost:8000/yellow.json",
    "config": {
        "system": "SystemStatusYellow",
        "url": "http://%hostname%:8000/yellow.json",
        "color": "status",
        "message": "message"
    },
    "index": 5
}, {
    "color": "yellow",
    "message": ["Last sync >10 seconds ago", "Last order placement failed"],
    "package-version": null,
    "components": null
}], [{
    "hostname": "127.0.0.1",
    "environment": "DEV",
    "system": "SystemStatusYellow",
    "status-url": "http://127.0.0.1:8000/yellow.json",
    "config": {
        "system": "SystemStatusYellow",
        "url": "http://%hostname%:8000/yellow.json",
        "color": "status",
        "message": "message"
    },
    "index": 6
}, {
    "color": "yellow",
    "message": ["Last sync >10 seconds ago", "Last order placement failed"],
    "package-version": null,
    "components": null
}], [{
    "hostname": "localhost",
    "environment": "PROD",
    "system": "SystemWith404",
    "status-url": "http://localhost:8000/not_found",
    "config": {"system": "SystemWith404", "url": "http://%hostname%:8000/not_found"},
    "index": 3
}, {
    "color": "red",
    "message": "Status 404: <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /not_found</pre>\n</body>\n</html>\n"
}], [{
    "hostname": "127.0.0.1",
    "environment": "PROD",
    "system": "SystemWithSimpleStatusCheck",
    "status-url": "http://127.0.0.1:8000/found",
    "config": {"system": "SystemWithSimpleStatusCheck", "url": "http://%hostname%:8000/found"},
    "index": 2
}, {"color": "green", "message": "OK"}], [{
    "hostname": "localhost",
    "environment": "DEV",
    "system": "SystemWithSimpleStatusCheck",
    "status-url": "http://localhost:8000/found",
    "config": {"system": "SystemWithSimpleStatusCheck", "url": "http://%hostname%:8000/found"},
    "index": 0
}, {"color": "green", "message": "OK"}], [{
    "hostname": "localhost",
    "environment": "PROD",
    "system": "SystemWithSimpleStatusCheck",
    "status-url": "http://localhost:8000/found",
    "config": {"system": "SystemWithSimpleStatusCheck", "url": "http://%hostname%:8000/found"},
    "index": 1
}, {"color": "green", "message": "OK"}], [{
    "hostname": "localhost",
    "environment": "UAT",
    "system": "redirect",
    "status-url": "http://localhost:8000/redirect",
    "config": {"system": "redirect", "url": "http://%hostname%:8000/redirect"},
    "index": 14
}, {"color": "green", "message": "OK"}]]