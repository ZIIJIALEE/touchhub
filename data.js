/**
 * TouchHub presentation data, checked against the final paper and media manifests.
 * Fractions remain in [0, 1]; successRates and budget series use percentages.
 * benchmark[].methods: { id, name, fullName, value }; direction is higher/lower.
 * robotClips: hand sharpa/xhand; task bulb/cup/wipe; relative video/poster paths.
 * successRates[].methods: { name, value, ci95: [lower, upper] }.
 * fullRobotTable contains all six baselines, not only the displayed three methods.
 * unseenDevices drift values use millimeters; false activation remains a fraction.
 * budgets.robot/glove: x and same-length series[].values, never temporal samples.
 * ablation: name, accuracy, falseActivation, readingError.
 * No filesystem paths, identities, or private recording metadata are shipped.
 */
window.TOUCHHUB_DATA ={
  "benchmark": [
    {
      "id": "accuracy_10mm",
      "label": "10 mm accuracy",
      "unit": "fraction",
      "direction": "higher",
      "decimals": 3,
      "sameSkinReference": 0.775,
      "methods": [
        {
          "id": "geometry",
          "name": "Geometric transport",
          "fullName": "Geometric transport (no learned weights)",
          "value": 0.743
        },
        {
          "id": "fact",
          "name": "FACT-style",
          "fullName": "FACT-style (per-finger pooling on full-hand taxels)",
          "value": 0.173
        },
        {
          "id": "opentac",
          "name": "OpenTac-style",
          "fullName": "OpenTac-style (area overlap)",
          "value": 0.62
        },
        {
          "id": "dfm",
          "name": "Transport + DFM",
          "fullName": "Transport + DFM (flow on s0)",
          "value": 0.074
        },
        {
          "id": "cyclegan",
          "name": "Transport + CycleGAN",
          "fullName": "Transport + CycleGAN (residual on s0)",
          "value": 0.215
        },
        {
          "id": "threshold",
          "name": "Transport + threshold",
          "fullName": "Transport + threshold (0.05 + linear gain)",
          "value": 0.679
        },
        {
          "id": "touchhub",
          "name": "TouchHub",
          "fullName": "TouchHub",
          "value": 0.731
        }
      ]
    },
    {
      "id": "two_finger_accuracy",
      "label": "Two-finger accuracy",
      "unit": "fraction",
      "direction": "higher",
      "decimals": 3,
      "sameSkinReference": 0.438,
      "methods": [
        {
          "id": "geometry",
          "name": "Geometric transport",
          "fullName": "Geometric transport (no learned weights)",
          "value": 0.388
        },
        {
          "id": "fact",
          "name": "FACT-style",
          "fullName": "FACT-style (per-finger pooling on full-hand taxels)",
          "value": 0.046
        },
        {
          "id": "opentac",
          "name": "OpenTac-style",
          "fullName": "OpenTac-style (area overlap)",
          "value": 0.288
        },
        {
          "id": "dfm",
          "name": "Transport + DFM",
          "fullName": "Transport + DFM (flow on s0)",
          "value": 0.122
        },
        {
          "id": "cyclegan",
          "name": "Transport + CycleGAN",
          "fullName": "Transport + CycleGAN (residual on s0)",
          "value": 0.096
        },
        {
          "id": "threshold",
          "name": "Transport + threshold",
          "fullName": "Transport + threshold (0.05 + linear gain)",
          "value": 0.282
        },
        {
          "id": "touchhub",
          "name": "TouchHub",
          "fullName": "TouchHub",
          "value": 0.377
        }
      ]
    },
    {
      "id": "false_activation",
      "label": "False activation",
      "unit": "fraction",
      "direction": "lower",
      "decimals": 3,
      "sameSkinReference": null,
      "methods": [
        {
          "id": "geometry",
          "name": "Geometric transport",
          "fullName": "Geometric transport (no learned weights)",
          "value": 0.534
        },
        {
          "id": "fact",
          "name": "FACT-style",
          "fullName": "FACT-style (per-finger pooling on full-hand taxels)",
          "value": 0.546
        },
        {
          "id": "opentac",
          "name": "OpenTac-style",
          "fullName": "OpenTac-style (area overlap)",
          "value": 0.082
        },
        {
          "id": "dfm",
          "name": "Transport + DFM",
          "fullName": "Transport + DFM (flow on s0)",
          "value": 0.678
        },
        {
          "id": "cyclegan",
          "name": "Transport + CycleGAN",
          "fullName": "Transport + CycleGAN (residual on s0)",
          "value": 0.42
        },
        {
          "id": "threshold",
          "name": "Transport + threshold",
          "fullName": "Transport + threshold (0.05 + linear gain)",
          "value": 0.102
        },
        {
          "id": "touchhub",
          "name": "TouchHub",
          "fullName": "TouchHub",
          "value": 0.076
        }
      ]
    },
    {
      "id": "log_reading_error",
      "label": "Log-reading error",
      "unit": "log-reading error",
      "direction": "lower",
      "decimals": 2,
      "sameSkinReference": 0.17,
      "methods": [
        {
          "id": "geometry",
          "name": "Geometric transport",
          "fullName": "Geometric transport (no learned weights)",
          "value": 1.54
        },
        {
          "id": "fact",
          "name": "FACT-style",
          "fullName": "FACT-style (per-finger pooling on full-hand taxels)",
          "value": 1.42
        },
        {
          "id": "opentac",
          "name": "OpenTac-style",
          "fullName": "OpenTac-style (area overlap)",
          "value": 0.86
        },
        {
          "id": "dfm",
          "name": "Transport + DFM",
          "fullName": "Transport + DFM (flow on s0)",
          "value": 2.83
        },
        {
          "id": "cyclegan",
          "name": "Transport + CycleGAN",
          "fullName": "Transport + CycleGAN (residual on s0)",
          "value": 1.6
        },
        {
          "id": "threshold",
          "name": "Transport + threshold",
          "fullName": "Transport + threshold (0.05 + linear gain)",
          "value": 0.93
        },
        {
          "id": "touchhub",
          "name": "TouchHub",
          "fullName": "TouchHub",
          "value": 0.6
        }
      ]
    }
  ],
  "robotClips": [
    {
      "hand": "sharpa",
      "method": "TouchHub",
      "methodId": "touchhub",
      "task": "bulb",
      "taskLabel": "Light Bulb Screwing",
      "outcome": "Success",
      "speedLabel": "6×",
      "speed": 6.0,
      "durationSeconds": 10.0,
      "motionSeconds": 8.0,
      "endHoldSeconds": 2.0,
      "video": "assets/robots/sharpa/touchhub_bulb.mp4",
      "poster": "assets/robots/sharpa/touchhub_bulb_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "TouchHub",
      "methodId": "touchhub",
      "task": "cup",
      "taskLabel": "Paper Cup Separation",
      "outcome": "Success",
      "speedLabel": "4×",
      "speed": 4.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.0,
      "endHoldSeconds": 3.0,
      "video": "assets/robots/sharpa/touchhub_cup.mp4",
      "poster": "assets/robots/sharpa/touchhub_cup_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "TouchHub",
      "methodId": "touchhub",
      "task": "wipe",
      "taskLabel": "Whiteboard Wiping",
      "outcome": "Success",
      "speedLabel": "6×",
      "speed": 6.0,
      "durationSeconds": 10.0,
      "motionSeconds": 6.833333333333333,
      "endHoldSeconds": 3.166666666666667,
      "video": "assets/robots/sharpa/touchhub_wipe.mp4",
      "poster": "assets/robots/sharpa/touchhub_wipe_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "Robot only",
      "methodId": "robot_only",
      "task": "bulb",
      "taskLabel": "Light Bulb Screwing",
      "outcome": "Failure",
      "speedLabel": "12×",
      "speed": 12.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.341666666666666,
      "endHoldSeconds": 2.658333333333334,
      "video": "assets/robots/sharpa/robot_only_bulb.mp4",
      "poster": "assets/robots/sharpa/robot_only_bulb_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "Robot only",
      "methodId": "robot_only",
      "task": "cup",
      "taskLabel": "Paper Cup Separation",
      "outcome": "Failure",
      "speedLabel": "2.5×",
      "speed": 2.5,
      "durationSeconds": 10.0,
      "motionSeconds": 7.026666800000001,
      "endHoldSeconds": 2.973333199999999,
      "video": "assets/robots/sharpa/robot_only_cup.mp4",
      "poster": "assets/robots/sharpa/robot_only_cup_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "Robot only",
      "methodId": "robot_only",
      "task": "wipe",
      "taskLabel": "Whiteboard Wiping",
      "outcome": "Success",
      "speedLabel": "4×",
      "speed": 4.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.275,
      "endHoldSeconds": 2.7249999999999996,
      "video": "assets/robots/sharpa/robot_only_wipe.mp4",
      "poster": "assets/robots/sharpa/robot_only_wipe_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "Human touch masked",
      "methodId": "human_touch_masked",
      "task": "bulb",
      "taskLabel": "Light Bulb Screwing",
      "outcome": "Failure",
      "speedLabel": "3.5×",
      "speed": 3.5,
      "durationSeconds": 10.0,
      "motionSeconds": 7.063142857142857,
      "endHoldSeconds": 2.936857142857143,
      "video": "assets/robots/sharpa/human_touch_masked_bulb.mp4",
      "poster": "assets/robots/sharpa/human_touch_masked_bulb_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "Human touch masked",
      "methodId": "human_touch_masked",
      "task": "cup",
      "taskLabel": "Paper Cup Separation",
      "outcome": "Failure",
      "speedLabel": "2×",
      "speed": 2.0,
      "durationSeconds": 10.0,
      "motionSeconds": 6.085,
      "endHoldSeconds": 3.915,
      "video": "assets/robots/sharpa/human_touch_masked_cup.mp4",
      "poster": "assets/robots/sharpa/human_touch_masked_cup_middle.png"
    },
    {
      "hand": "sharpa",
      "method": "Human touch masked",
      "methodId": "human_touch_masked",
      "task": "wipe",
      "taskLabel": "Whiteboard Wiping",
      "outcome": "Failure",
      "speedLabel": "4×",
      "speed": 4.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.19166675,
      "endHoldSeconds": 2.8083332499999996,
      "video": "assets/robots/sharpa/human_touch_masked_wipe.mp4",
      "poster": "assets/robots/sharpa/human_touch_masked_wipe_middle.png"
    },
    {
      "hand": "xhand",
      "method": "TouchHub",
      "methodId": "touchhub",
      "task": "bulb",
      "taskLabel": "Light Bulb Screwing",
      "outcome": "Success",
      "speedLabel": "6×",
      "speed": 6.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.833333333333333,
      "endHoldSeconds": 2.166666666666667,
      "video": "assets/robots/xhand/touchhub_bulb.mp4",
      "poster": "assets/robots/xhand/touchhub_bulb_middle.png"
    },
    {
      "hand": "xhand",
      "method": "TouchHub",
      "methodId": "touchhub",
      "task": "cup",
      "taskLabel": "Paper Cup Separation",
      "outcome": "Success",
      "speedLabel": "2×",
      "speed": 2.0,
      "durationSeconds": 10.0,
      "motionSeconds": 6.45,
      "endHoldSeconds": 3.55,
      "video": "assets/robots/xhand/touchhub_cup.mp4",
      "poster": "assets/robots/xhand/touchhub_cup_middle.png"
    },
    {
      "hand": "xhand",
      "method": "TouchHub",
      "methodId": "touchhub",
      "task": "wipe",
      "taskLabel": "Whiteboard Wiping",
      "outcome": "Success",
      "speedLabel": "2×",
      "speed": 2.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.25,
      "endHoldSeconds": 2.75,
      "video": "assets/robots/xhand/touchhub_wipe.mp4",
      "poster": "assets/robots/xhand/touchhub_wipe_middle.png"
    },
    {
      "hand": "xhand",
      "method": "Robot only",
      "methodId": "robot_only",
      "task": "bulb",
      "taskLabel": "Light Bulb Screwing",
      "outcome": "Failure",
      "speedLabel": "8×",
      "speed": 8.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.4750000000000005,
      "endHoldSeconds": 2.5249999999999995,
      "video": "assets/robots/xhand/robot_only_bulb.mp4",
      "poster": "assets/robots/xhand/robot_only_bulb_middle.png"
    },
    {
      "hand": "xhand",
      "method": "Robot only",
      "methodId": "robot_only",
      "task": "cup",
      "taskLabel": "Paper Cup Separation",
      "outcome": "Failure",
      "speedLabel": "2×",
      "speed": 2.0,
      "durationSeconds": 10.0,
      "motionSeconds": 6.15,
      "endHoldSeconds": 3.8499999999999996,
      "video": "assets/robots/xhand/robot_only_cup.mp4",
      "poster": "assets/robots/xhand/robot_only_cup_middle.png"
    },
    {
      "hand": "xhand",
      "method": "Robot only",
      "methodId": "robot_only",
      "task": "wipe",
      "taskLabel": "Whiteboard Wiping",
      "outcome": "Success",
      "speedLabel": "3×",
      "speed": 3.0,
      "durationSeconds": 10.0,
      "motionSeconds": 6.900000000000001,
      "endHoldSeconds": 3.0999999999999988,
      "video": "assets/robots/xhand/robot_only_wipe.mp4",
      "poster": "assets/robots/xhand/robot_only_wipe_middle.png"
    },
    {
      "hand": "xhand",
      "method": "Human touch masked",
      "methodId": "human_touch_masked",
      "task": "bulb",
      "taskLabel": "Light Bulb Screwing",
      "outcome": "Failure",
      "speedLabel": "10×",
      "speed": 10.0,
      "durationSeconds": 10.0,
      "motionSeconds": 6.67,
      "endHoldSeconds": 3.33,
      "video": "assets/robots/xhand/human_touch_masked_bulb.mp4",
      "poster": "assets/robots/xhand/human_touch_masked_bulb_middle.png"
    },
    {
      "hand": "xhand",
      "method": "Human touch masked",
      "methodId": "human_touch_masked",
      "task": "cup",
      "taskLabel": "Paper Cup Separation",
      "outcome": "Failure",
      "speedLabel": "2×",
      "speed": 2.0,
      "durationSeconds": 10.0,
      "motionSeconds": 6.65,
      "endHoldSeconds": 3.3499999999999996,
      "video": "assets/robots/xhand/human_touch_masked_cup.mp4",
      "poster": "assets/robots/xhand/human_touch_masked_cup_middle.png"
    },
    {
      "hand": "xhand",
      "method": "Human touch masked",
      "methodId": "human_touch_masked",
      "task": "wipe",
      "taskLabel": "Whiteboard Wiping",
      "outcome": "Success",
      "speedLabel": "10×",
      "speed": 10.0,
      "durationSeconds": 10.0,
      "motionSeconds": 7.44,
      "endHoldSeconds": 2.5599999999999996,
      "video": "assets/robots/xhand/human_touch_masked_wipe.mp4",
      "poster": "assets/robots/xhand/human_touch_masked_wipe_middle.png"
    }
  ],
  "successRates": [
    {
      "hand": "sharpa",
      "task": "bulb",
      "handLabel": "Sharpa W01",
      "taskLabel": "Light Bulb Screwing",
      "robotDemonstrations": 60,
      "methods": [
        {
          "name": "TouchHub",
          "value": 93,
          "ci95": [
            79,
            98
          ]
        },
        {
          "name": "Robot only",
          "value": 40,
          "ci95": [
            25,
            58
          ]
        },
        {
          "name": "Human touch masked",
          "value": 50,
          "ci95": [
            33,
            67
          ]
        }
      ]
    },
    {
      "hand": "sharpa",
      "task": "cup",
      "handLabel": "Sharpa W01",
      "taskLabel": "Paper Cup Separation",
      "robotDemonstrations": 44,
      "methods": [
        {
          "name": "TouchHub",
          "value": 90,
          "ci95": [
            74,
            97
          ]
        },
        {
          "name": "Robot only",
          "value": 0,
          "ci95": [
            0,
            11
          ]
        },
        {
          "name": "Human touch masked",
          "value": 60,
          "ci95": [
            42,
            75
          ]
        }
      ]
    },
    {
      "hand": "sharpa",
      "task": "wipe",
      "handLabel": "Sharpa W01",
      "taskLabel": "Whiteboard Wiping",
      "robotDemonstrations": 62,
      "methods": [
        {
          "name": "TouchHub",
          "value": 97,
          "ci95": [
            83,
            99
          ]
        },
        {
          "name": "Robot only",
          "value": 100,
          "ci95": [
            89,
            100
          ]
        },
        {
          "name": "Human touch masked",
          "value": 87,
          "ci95": [
            70,
            95
          ]
        }
      ]
    },
    {
      "hand": "xhand",
      "task": "bulb",
      "handLabel": "XHand 1 Pro",
      "taskLabel": "Light Bulb Screwing",
      "robotDemonstrations": 79,
      "methods": [
        {
          "name": "TouchHub",
          "value": 90,
          "ci95": [
            60,
            98
          ]
        },
        {
          "name": "Robot only",
          "value": 60,
          "ci95": [
            31,
            83
          ]
        },
        {
          "name": "Human touch masked",
          "value": 60,
          "ci95": [
            31,
            83
          ]
        }
      ]
    },
    {
      "hand": "xhand",
      "task": "cup",
      "handLabel": "XHand 1 Pro",
      "taskLabel": "Paper Cup Separation",
      "robotDemonstrations": 82,
      "methods": [
        {
          "name": "TouchHub",
          "value": 100,
          "ci95": [
            84,
            100
          ]
        },
        {
          "name": "Robot only",
          "value": 50,
          "ci95": [
            30,
            70
          ]
        },
        {
          "name": "Human touch masked",
          "value": 55,
          "ci95": [
            34,
            74
          ]
        }
      ]
    },
    {
      "hand": "xhand",
      "task": "wipe",
      "handLabel": "XHand 1 Pro",
      "taskLabel": "Whiteboard Wiping",
      "robotDemonstrations": 84,
      "methods": [
        {
          "name": "TouchHub",
          "value": 90,
          "ci95": [
            70,
            97
          ]
        },
        {
          "name": "Robot only",
          "value": 55,
          "ci95": [
            34,
            74
          ]
        },
        {
          "name": "Human touch masked",
          "value": 55,
          "ci95": [
            34,
            74
          ]
        }
      ]
    }
  ],
  "fullRobotTable": {
    "columns": [
      "XHand Paper cup",
      "XHand Whiteboard",
      "XHand Light bulb 15",
      "XHand Light bulb 40",
      "XHand Light bulb 79",
      "Sharpa Paper cup",
      "Sharpa Whiteboard",
      "Sharpa Light bulb"
    ],
    "robotDemonstrations": [
      82,
      84,
      15,
      40,
      79,
      44,
      62,
      60
    ],
    "humanDemonstrations": {
      "XHand": {
        "Paper cup": 132,
        "Whiteboard": 133,
        "Light bulb": 150
      },
      "Sharpa": {
        "Paper cup": 131,
        "Whiteboard": 132,
        "Light bulb": 150
      }
    },
    "rows": [
      {
        "name": "Robot only",
        "values": [
          50,
          55,
          60,
          50,
          60,
          0,
          100,
          40
        ],
        "ci95": [
          [
            30,
            70
          ],
          [
            34,
            74
          ],
          [
            31,
            83
          ],
          [
            24,
            76
          ],
          [
            31,
            83
          ],
          [
            0,
            11
          ],
          [
            89,
            100
          ],
          [
            25,
            58
          ]
        ]
      },
      {
        "name": "Human only",
        "values": [
          35,
          25,
          30,
          30,
          30,
          0,
          0,
          30
        ],
        "ci95": [
          [
            18,
            57
          ],
          [
            11,
            47
          ],
          [
            11,
            60
          ],
          [
            11,
            60
          ],
          [
            11,
            60
          ],
          [
            0,
            11
          ],
          [
            0,
            11
          ],
          [
            17,
            48
          ]
        ]
      },
      {
        "name": "Human touch masked",
        "values": [
          55,
          55,
          50,
          60,
          60,
          60,
          87,
          50
        ],
        "ci95": [
          [
            34,
            74
          ],
          [
            34,
            74
          ],
          [
            24,
            76
          ],
          [
            31,
            83
          ],
          [
            31,
            83
          ],
          [
            42,
            75
          ],
          [
            70,
            95
          ],
          [
            33,
            67
          ]
        ]
      },
      {
        "name": "Touch thresholding",
        "values": [
          35,
          40,
          40,
          60,
          30,
          100,
          50,
          47
        ],
        "ci95": [
          [
            18,
            57
          ],
          [
            22,
            61
          ],
          [
            17,
            69
          ],
          [
            31,
            83
          ],
          [
            11,
            60
          ],
          [
            89,
            100
          ],
          [
            33,
            67
          ],
          [
            30,
            64
          ]
        ]
      },
      {
        "name": "FTP-1-style zone encoder",
        "values": [
          60,
          60,
          60,
          60,
          70,
          57,
          80,
          47
        ],
        "ci95": [
          [
            39,
            78
          ],
          [
            39,
            78
          ],
          [
            31,
            83
          ],
          [
            31,
            83
          ],
          [
            40,
            89
          ],
          [
            39,
            73
          ],
          [
            63,
            90
          ],
          [
            30,
            64
          ]
        ]
      },
      {
        "name": "TouchHub",
        "values": [
          100,
          90,
          80,
          80,
          90,
          90,
          97,
          93
        ],
        "ci95": [
          [
            84,
            100
          ],
          [
            70,
            97
          ],
          [
            49,
            94
          ],
          [
            49,
            94
          ],
          [
            60,
            98
          ],
          [
            74,
            97
          ],
          [
            83,
            99
          ],
          [
            79,
            98
          ]
        ]
      }
    ]
  },
  "unseenDevices": [
    {
      "name": "XHand 1 Pro",
      "geometryDrift": 14.8,
      "touchhubDrift": 13.9,
      "geometryFalseActivation": 0.399,
      "touchhubFalseActivation": 0.081
    },
    {
      "name": "Sharpa W01",
      "geometryDrift": 14.9,
      "touchhubDrift": 10.4,
      "geometryFalseActivation": 0.418,
      "touchhubFalseActivation": 0.058
    },
    {
      "name": "TouchScale glove",
      "geometryDrift": 29.2,
      "touchhubDrift": 13.1,
      "geometryFalseActivation": 0.423,
      "touchhubFalseActivation": 0.095
    },
    {
      "name": "Wuji Glove (EgoExplorer)",
      "geometryDrift": 30.9,
      "touchhubDrift": 26.0,
      "geometryFalseActivation": 0.469,
      "touchhubFalseActivation": 0.091
    },
    {
      "name": "Matrix CAD (HumanTouch)",
      "geometryDrift": 16.6,
      "touchhubDrift": 12.4,
      "geometryFalseActivation": 0.396,
      "touchhubFalseActivation": 0.121
    }
  ],
  "heldOutSkins": [
    {
      "name": "Both Matrix skins",
      "geometryAccuracy": 0.745,
      "touchhubAccuracy": 0.729,
      "geometryFalseActivation": 0.568,
      "touchhubFalseActivation": 0.062,
      "geometryReadingError": 2.1,
      "touchhubReadingError": 0.69
    },
    {
      "name": "One rig glove",
      "geometryAccuracy": 0.743,
      "touchhubAccuracy": 0.728,
      "geometryFalseActivation": 0.534,
      "touchhubFalseActivation": 0.087,
      "geometryReadingError": 1.54,
      "touchhubReadingError": 0.67
    }
  ],
  "budgets": {
    "robot": {
      "x": [
        15,
        40,
        79
      ],
      "series": [
        {
          "name": "TouchHub",
          "values": [
            80,
            80,
            90
          ]
        },
        {
          "name": "FTP-1-style zone encoder",
          "values": [
            60,
            60,
            70
          ]
        },
        {
          "name": "Robot Only",
          "values": [
            60,
            50,
            60
          ]
        },
        {
          "name": "Threshold",
          "values": [
            40,
            60,
            30
          ]
        },
        {
          "name": "Human touch masked",
          "values": [
            50,
            60,
            60
          ]
        }
      ],
      "humanDemonstrations": 150,
      "trialsPerPoint": 10
    },
    "glove": {
      "x": [
        5,
        10,
        20
      ],
      "series": [
        {
          "name": "TouchHub",
          "values": [
            38.6,
            43.1,
            48.1
          ]
        },
        {
          "name": "Threshold",
          "values": [
            32.7,
            40.0,
            46.3
          ]
        },
        {
          "name": "FTP-1-style zone encoder",
          "values": [
            32.8,
            37.7,
            44.4
          ]
        },
        {
          "name": "Target Glove Only",
          "values": [
            32.6,
            37.1,
            42.6
          ]
        }
      ],
      "pretrainingEpisodes": 1200,
      "targetGloves": [
        "Juqiao",
        "Crocket",
        "ModuTech (96 channels)"
      ],
      "valueProvenance": "Curves digitized from the original figure and rounded to 0.1 percentage points; the paper text confirms 48.1, 44.4, and 42.6 at K = 20.",
      "note": "All three target gloves are unseen by the reader; only ModuTech is also unseen during TouchHub pretraining. Reader adaptation uses labels; TouchHub remains frozen."
    }
  },
  "ablation": [
    {
      "name": "Geometric transport only",
      "accuracy": 0.743,
      "falseActivation": 0.534,
      "readingError": 1.54
    },
    {
      "name": "Without footprint restoration",
      "accuracy": 0.733,
      "falseActivation": 0.444,
      "readingError": 1.37
    },
    {
      "name": "Without scale calibration",
      "accuracy": 0.731,
      "falseActivation": 0.235,
      "readingError": 0.68
    },
    {
      "name": "TouchHub (full)",
      "accuracy": 0.731,
      "falseActivation": 0.076,
      "readingError": 0.6
    },
    {
      "name": "Restoration with unpaired gloves",
      "accuracy": 0.115,
      "falseActivation": 0.243,
      "readingError": 1.03
    },
    {
      "name": "Restoration with synthetic layouts",
      "accuracy": 0.729,
      "falseActivation": 0.075,
      "readingError": 0.58
    }
  ],
  "sources": {
    "benchmark": "Final paper, Table 1, page 5.",
    "unseenDevices": "Final paper, Table 2, page 6.",
    "successRates": "Final paper, Table 3, page 8. Rates are percentages; ci95 gives the reported Wilson interval.",
    "budgets": "Final paper, Figure 7, page 7, and Sections 5.3-5.4.",
    "ablation": "Final paper, Table 4, page 8. Twelve transfer directions, three seeds."
  },
  "notes": {
    "benchmark": "Baseline names ending in -style and Transport + denote taxel-space adaptations. No uncertainty intervals are reported in Table 1.",
    "robotClips": "Selected qualitative examples, edited and accelerated at the displayed speed. Aggregate success rates come from Table 3.",
    "humanTouchMasked": "Co-training on human and robot demonstrations, masking tactile inputs only in human demonstrations.",
    "unseenDevices": "Both networks stay frozen. New sensors provide their layout and unlabeled touch recordings. Drift measures source-to-target 3D contact centroid drift on MANO, in mm.",
    "heldOutSkins": "Rig results average source and target roles, except one-rig-glove reading error, which is the median over 12 directions.",
    "standardRestoration": "Multi-glove pretraining with within-sensor round-trip supervision.",
    "unpairedRestoration": "Cross-sensor restoration training with unpaired glove data.",
    "syntheticRestoration": "Within-sensor round trips via synthetic MANO layouts, without data from other skins."
  }
};
