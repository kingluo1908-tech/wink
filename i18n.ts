export type Language = "zh" | "en";

export const languageLabels: Record<Language, string> = {
  zh: "中文",
  en: "EN"
};

export const copy = {
  zh: {
    nav: {
      home: "首页",
      reserve: "金库",
      burn: "销毁",
      swap: "兑换",
      mechanism: "机制",
      rewards: "奖励",
      official: "官方"
    },
    common: {
      connectWallet: "连接钱包",
      cancel: "取消",
      confirm: "确认",
      close: "关闭",
      soon: "即将开放",
      openOfficial: "打开官方入口",
      demo: "Demo",
      languageLabel: "切换语言",
      touchLogo: "触碰 WINK Logo",
      openNavigation: "打开导航",
      closeNavigation: "关闭导航"
    },
    hero: {
      touch: "TOUCH TO WINK",
      tagline: "动态托底 · 持续销毁 · BLINK 价值循环",
      stack: "WINK + BLINK + NVDA",
      sentence: "让每一笔交易，都成为下一次价值循环的开始。",
      primary: "立即兑换",
      secondary: "探索机制"
    },
    reserve: {
      title: "动态储备金库",
      subtitle: "储备持续增长，价值实时可见。",
      currentReserve: "当前 BLINK 储备",
      reserveValue: "储备价值",
      ratio: "市场价 / 动态托底价",
      marketPrice: "当前 WINK 市场价",
      floorPrice: "协议动态托底价",
      increase24h: "24H 新增储备",
      increase7d: "7D 新增储备",
      priceChart: "Market / Floor Price",
      priceChartSub: "WINK 市场价格与动态托底价",
      reserveGrowth: "BLINK Reserve Growth",
      reserveGrowthSub: "储备量随时间增长",
      tooltipMarket: "市场价",
      tooltipFloor: "托底价",
      tooltipRatio: "倍数"
    },
    burn: {
      title: "销毁中心",
      subtitle: "主动销毁 WINK，获得销毁权重，并参与后续 BLINK 奖励分配。",
      totalBurned: "累计销毁",
      circulating: "当前流通",
      burnRatio: "销毁比例",
      participants: "参与销毁地址",
      cardTitle: "销毁 WINK",
      balance: "我的余额",
      inputLabel: "输入销毁数量",
      thisBurn: "本次销毁",
      afterMyBurn: "销毁后我的累计销毁",
      globalBurn: "当前全网累计销毁",
      estimatedBurnWeight: "预计销毁权重",
      rewardPool: "当前 BLINK 奖励池",
      estimatedRewardWeight: "预计奖励权重",
      submit: "确认销毁",
      modalTitle: "确认销毁",
      amount: "销毁数量",
      weight: "预计权重",
      warning: "操作不可逆。当前版本仅执行 Mock 流程，不会发起真实链上交易。"
    },
    swap: {
      title: "兑换 Wink",
      subtitle: "WINK 与 BLINK 深度绑定，双向兑换入口先以 Mock UI 呈现。",
      payAsset: "支付币种",
      balance: "余额",
      payAmount: "支付数量",
      switchDirection: "切换兑换方向",
      receiveAsset: "获得币种",
      estimatedReceive: "预计获得",
      currentPrice: "当前价格",
      priceImpact: "价格影响",
      minimumReceived: "最少收到",
      fee: "手续费",
      submit: "立即兑换",
      modalTitle: "模拟交易确认",
      modalBody: "当前 Router 和合约尚未接入，此操作只展示兑换确认流程，不会执行真实链上交易。"
    },
    mechanism: {
      title: "每一笔交易，都在推动价值循环",
      subtitle: "3% 协议流量被分成两路：储备托底与销毁奖励。",
      convertBlink: "转换为 BLINK",
      reserveTitle: "进入动态托底储备",
      reserveBody: "交易越多，储备越厚，协议托底能力随 BLINK 储备增长而增强。",
      rewardTitle: "进入奖励池",
      rewardBody: "奖励主动销毁 WINK 的参与者。不是持有分红，而是销毁获得权重。",
      flywheel: ["交易发生", "BLINK 需求增加", "BLINK 储备增长", "动态托底增强", "用户销毁 WINK", "WINK 流通减少"],
      steps: [
        ["交易产生", "每一笔交易收取 3%，形成协议流量。"],
        ["动态托底", "2% 持续转换成 BLINK 并进入链上储备金库。"],
        ["主动销毁", "用户销毁 WINK 后获得权重，后续按权重获得 BLINK。"],
        ["奖励循环", "BLINK 奖励推动继续销毁，WINK 流通量持续减少。"]
      ]
    },
    rewards: {
      title: "销毁后的实时奖励",
      subtitle: "销毁不是结束，权重会持续参与 BLINK 奖励池分配。",
      myBurned: "我的累计销毁",
      myWeight: "我的销毁权重",
      pending: "待领取",
      claimed: "累计领取",
      rewardPool: "当前奖励池",
      distributedToday: "今日累计分配",
      claim: "领取 BLINK",
      modalTitle: "领取 BLINK",
      modalConfirm: "确认领取",
      modalPrefix: "本次将领取",
      modalSuffix: "当前版本为 Mock 动画与状态更新，不会执行真实链上交易。",
      tableTitle: "前 10 销毁地址",
      headers: ["排名", "销毁地址", "销毁数量", "销毁权重"]
    },
    official: {
      title: "连接 Wink",
      subtitle: "所有官方渠道，一个入口。",
      links: {
        twitter: "X / Twitter",
        telegram: "Telegram",
        discord: "Discord",
        qq: "QQ 社区",
        docs: "官方文档",
        explorer: "区块浏览器",
        contract: "复制合约",
        website: "Website"
      }
    },
    wallet: {
      title: "连接钱包",
      subtitle: "Demo UI，后续替换为真实 Web3 SDK。",
      close: "关闭钱包窗口"
    },
    footer: {
      stack: "WINK + BLINK + NVDA",
      risk: "Wink 为实验性链上项目。页面数据与协议机制不构成价格承诺或投资建议。"
    }
  },
  en: {
    nav: {
      home: "Home",
      reserve: "Reserve",
      burn: "Burn",
      swap: "Swap",
      mechanism: "Mechanism",
      rewards: "Rewards",
      official: "Official"
    },
    common: {
      connectWallet: "Connect Wallet",
      cancel: "Cancel",
      confirm: "Confirm",
      close: "Close",
      soon: "Coming Soon",
      openOfficial: "Open official channel",
      demo: "Demo",
      languageLabel: "Switch language",
      touchLogo: "Touch WINK Logo",
      openNavigation: "Open navigation",
      closeNavigation: "Close navigation"
    },
    hero: {
      touch: "TOUCH TO WINK",
      tagline: "Dynamic Floor · Continuous Burn · BLINK Value Loop",
      stack: "WINK + BLINK + NVDA",
      sentence: "Every trade becomes the beginning of the next value loop.",
      primary: "Swap Now",
      secondary: "Explore Mechanism"
    },
    reserve: {
      title: "Dynamic Reserve Vault",
      subtitle: "Reserve growth stays visible in real time.",
      currentReserve: "Current BLINK Reserve",
      reserveValue: "Reserve Value",
      ratio: "Market / Dynamic Floor",
      marketPrice: "Current WINK Market Price",
      floorPrice: "Protocol Dynamic Floor",
      increase24h: "24H Reserve Added",
      increase7d: "7D Reserve Added",
      priceChart: "Market / Floor Price",
      priceChartSub: "WINK market price and protocol floor",
      reserveGrowth: "BLINK Reserve Growth",
      reserveGrowthSub: "Reserve growth over time",
      tooltipMarket: "Market price",
      tooltipFloor: "Floor price",
      tooltipRatio: "Ratio"
    },
    burn: {
      title: "Burn Center",
      subtitle: "Burn WINK actively, earn burn weight, and participate in future BLINK reward distribution.",
      totalBurned: "Total Burned",
      circulating: "Circulating",
      burnRatio: "Burn Ratio",
      participants: "Burn Addresses",
      cardTitle: "Burn WINK",
      balance: "My Balance",
      inputLabel: "Burn Amount",
      thisBurn: "This Burn",
      afterMyBurn: "My Burned After",
      globalBurn: "Global Burned",
      estimatedBurnWeight: "Estimated Burn Weight",
      rewardPool: "Current BLINK Reward Pool",
      estimatedRewardWeight: "Estimated Reward Weight",
      submit: "Confirm Burn",
      modalTitle: "Confirm Burn",
      amount: "Burn Amount",
      weight: "Estimated Weight",
      warning: "This action is irreversible. The current version only runs a mock flow and will not send a real on-chain transaction."
    },
    swap: {
      title: "Swap Wink",
      subtitle: "WINK and BLINK are deeply linked. This swap entry is currently a mock UI.",
      payAsset: "Pay",
      balance: "Balance",
      payAmount: "Pay Amount",
      switchDirection: "Switch swap direction",
      receiveAsset: "Receive",
      estimatedReceive: "Estimated Receive",
      currentPrice: "Current Price",
      priceImpact: "Price Impact",
      minimumReceived: "Minimum Received",
      fee: "Fee",
      submit: "Swap Now",
      modalTitle: "Mock Trade Confirmation",
      modalBody: "Router and contracts are not connected yet. This only shows the swap confirmation flow and will not execute a real on-chain trade."
    },
    mechanism: {
      title: "Every Trade Pushes the Value Loop",
      subtitle: "The 3% protocol flow splits into two paths: reserve floor support and burn rewards.",
      convertBlink: "Converted to BLINK",
      reserveTitle: "Into Dynamic Reserve",
      reserveBody: "More trading creates a thicker reserve, strengthening protocol floor support as BLINK reserves grow.",
      rewardTitle: "Into Reward Pool",
      rewardBody: "Rewards go to participants who actively burn WINK. It is not a holding dividend; burn creates weight.",
      flywheel: ["Trade Happens", "BLINK Demand Rises", "BLINK Reserve Grows", "Dynamic Floor Strengthens", "Users Burn WINK", "WINK Supply Drops"],
      steps: [
        ["Trade Flow", "Every trade charges 3%, creating protocol flow."],
        ["Dynamic Floor", "2% continuously converts to BLINK and enters the on-chain reserve vault."],
        ["Active Burn", "Users burn WINK to earn weight and receive BLINK later by weight."],
        ["Reward Loop", "BLINK rewards encourage further burns, continuously reducing WINK circulation."]
      ]
    },
    rewards: {
      title: "Real-Time BLINK Rewards After Burn",
      subtitle: "Burning is not the end. Your weight keeps participating in BLINK reward distribution.",
      myBurned: "My Total Burned",
      myWeight: "My Burn Weight",
      pending: "Pending",
      claimed: "Claimed",
      rewardPool: "Current Reward Pool",
      distributedToday: "Distributed Today",
      claim: "Claim BLINK",
      modalTitle: "Claim BLINK",
      modalConfirm: "Confirm Claim",
      modalPrefix: "This claim will receive",
      modalSuffix: "The current version only runs a mock animation and state update. It will not execute a real on-chain transaction.",
      tableTitle: "Top 10 Burn Addresses",
      headers: ["Rank", "Burn Address", "Burned", "Burn Weight"]
    },
    official: {
      title: "Connect With Wink",
      subtitle: "All official channels in one place.",
      links: {
        twitter: "X / Twitter",
        telegram: "Telegram",
        discord: "Discord",
        qq: "QQ Community",
        docs: "Official Docs",
        explorer: "Block Explorer",
        contract: "Copy Contract",
        website: "Website"
      }
    },
    wallet: {
      title: "Connect Wallet",
      subtitle: "Demo UI. This will be replaced with a real Web3 SDK later.",
      close: "Close wallet modal"
    },
    footer: {
      stack: "WINK + BLINK + NVDA",
      risk: "Wink is an experimental on-chain project. Page data and protocol mechanics are not a price guarantee or investment advice."
    }
  }
} as const;
