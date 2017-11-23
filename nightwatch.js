const seleniumPath = require('selenium-server').path;
const chromedriverPath = require('chromedriver').path;

module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",

  "selenium" : {
    "start_process" : true,
    "server_path" : seleniumPath,
    "log_path" : "reports",
    "host": "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : chromedriverPath
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "username" : "${SAUCE_USERNAME}",
      "access_key" : "${SAUCE_ACCESS_KEY}",
      "skip_testcases_on_fail": false,
      "desiredCapabilities": {
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "firefox" : {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "firefox",
        "version": "33"
      }
    },

    "internet_explorer_10" : {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "internet explorer",
        "version": "10"
      }
    },

    "android_s4_emulator": {
      "desiredCapabilities": {
        "browserName": "android",
        "deviceOrientation": "portrait",
        "deviceName": "Samsung Galaxy S4 Emulator"
      }
    },

    "iphone_6_simulator": {
      "desiredCapabilities": {
        "browserName": "iPhone",
        "deviceOrientation": "portrait",
        "deviceName": "iPhone 6",
        "platform": "OSX 10.10",
        "version": "8.4"
      }
    }
  }
}
