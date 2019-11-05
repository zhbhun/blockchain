# 源码解读

```bash
.
├── config
│   ├── adapters
│   ├── plugins
│   ├── strategies
│   ├── backtest.toml
│   └── general.toml
├── core
│   ├── budfox-
│   ├── markets-
│   ├── tools-
│   ├── workers
│   │   ├── datasetScan
│   │   ├── dateRangeScan
│   │   ├── loadCandles
│   │   └── pipeline
│   ├── candleBatcher.js
│   ├── emitter.js
│   ├── gekkoStream.js
│   ├── log.js
│   ├── pipeline.js
│   ├── pluginUtil.js
│   ├── prepareDateRange.js
│   ├── stats.js
│   ├── talib.js
│   ├── tulind.js
│   └── util.js ########################## 工具函数
├── docs
├── exchange
│   ├── orders
│   ├── triggers
│   ├── util
│   ├── wrappers
│   ├── dependencyCheck.js
│   ├── exchangeChecker.js
│   ├── exchangeErrors.js
│   ├── exchangeUtils.js
│   ├── gekkoBroker.js
│   ├── package.json
│   ├── package-lock.json
│   ├── portfolioManager.js
│   ├── README.md
│   └── trigger.js
├── history
├── importers
│   └── exchanges
├── logs
├── plugins
│   ├── mongodb
│   ├── paperTrader
│   ├── performanceAnalyzer
│   ├── postgresql
│   ├── sqlite
│   │   ├── handle ####################### SQLite 数据库初始化
│   │   ├── reader ####################### SQLite 行情数据查询
│   │   ├── scanner ###################### SQLite 行情表查询
│   │   ├── utils ######################## SQLite 工具函数
│   │   └── write ######################## SQLite 行情数据更新
│   ├── trader
│   ├── tradingAdvisor
│   ├── adviceLogger.js
│   ├── backtestResultExporter.js
│   ├── campfire.js
│   ├── childToParent.js
│   ├── eventLogger.js
│   ├── ifttt.js
│   ├── ircbot.js
│   ├── kodi.js
│   ├── mailer.js
│   ├── pushbullet.js
│   ├── pushover.js
│   ├── redisBeacon.js
│   ├── slack.js
│   ├── telegrambot.js
│   ├── twitter.js
│   ├── webserver.js
│   └── xmppbot.js
├── strategies
│   ├── indicators
├── test
│   ├── exchanges
│   ├── indicators
│   ├── plugins
│   ├── triggers
│   ├── candleBatcher.js
│   ├── marketFetcher.js
│   ├── _prepare.js
│   ├── test-config.json
│   └── tradeBatcher.js
├── web
│   ├── routes
│   ├── state
│   ├── vue
│   │   └── vue.config.js
│   ├── apiKeyManager.js
│   ├── baseUIconfig.js
│   ├── isWindows.js
│   └── server.js
├── appveyor.yml
├── config.js
├── CONTRIBUTING.md
├── docker-compose.yml
├── docker-entrypoint.sh
├── Dockerfile
├── gekko.js
├── LICENSE
├── package.json
├── package-lock.json
├── plugins.js
├── README.md
├── sample-config.js
├── SECRET-api-keys.json
└── subscriptions.js
```

## 使用方式

1. 带 UI

  gekko.js > web/server.js

2. 不带 UI

  gekko.js > core/pipeline.js

## 路由结构

- `/api`

  - `/api/scansets`：查询导入的数据集
