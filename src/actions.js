const CATEGORIES = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Patriotic Administration Center',
    cnName: '重火力武器'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Orbital Cannons',
    cnName: '轨道加农炮'
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hangar',
    cnName: '机库'
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Bridge',
    cnName: '舰桥'
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Engineering Bay',
    cnName: '能量武器'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Robotics Workshop',
    cnName: '机器人工厂'
  },
  {
    id: '06a89b98-cc7a-46ac-a8fb-7bbf12d5cb78',
    name: 'Chemical Agents',
    cnName: '化学'
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'General Stratagems',
    cnName: '通用'
  },
];

const PATRIOTIC_ADMINISTRATION_CENTER = [
  {
    name: 'Machine Gun',
    cnName: '机枪',
    code: ['down', 'left', 'down', 'up', 'right'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Anti-Materiel Rifle',
    cnName: '反器材步枪',
    code: ['down', 'left', 'right', 'up', 'down'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Stalwart',
    cnName: '盟友',
    code: ['down', 'left', 'down', 'up', 'up', 'left'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Expendable Anti-Tank',
    cnName: '消耗反坦克',
    code: ['down', 'down', 'left', 'up', 'right'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Recoilless Rifle',
    cnName: '无后座步枪',
    code: ['down', 'left', 'right', 'right', 'left'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Flamethrower',
    cnName: '火焰喷射器',
    code: ['down', 'left', 'up', 'down', 'up'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Autocannon',
    cnName: '机炮',
    code: ['down', 'left', 'down', 'up', 'up', 'right'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Heavy Machine Gun',
    cnName: '重机枪',
    code: ['down', 'left', 'up', 'down', 'down'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Airburst Rocket Launcher',
    cnName: '空爆火箭发射器',
    code: ['down', 'up', 'up', 'left', 'right'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Commando',
    cnName: '突击兵',
    code: ['down', 'left', 'up', 'down', 'right'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Railgun',
    cnName: '磁轨炮',
    code: ['down', 'right', 'down', 'up', 'left', 'right'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Spear',
    cnName: '飞矛',
    code: ['down', 'down', 'up', 'down', 'down'],
    category_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
  },
];

const ORBITAL_CANNONS = [
  {
    name: 'Orbital Gatling Barrage',
    cnName: '轨道加特林火力网',
    code: ['right', 'down', 'left', 'up', 'up'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Orbital Airburst Strike',
    cnName: '轨道空爆攻击',
    code: ['right', 'right', 'right'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Orbital 120MM HE Barrage',
    cnName: '轨道120',
    code: ['right', 'right', 'down', 'left', 'right', 'down'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Orbital 380MM HE Barrage',
    cnName: '轨道380',
    code: ['right', 'down', 'up', 'up', 'left', 'down', 'down'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Orbital Walking Barrage',
    cnName: '轨道游走火力网',
    code: ['right', 'down', 'right', 'down', 'right', 'down'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Orbital Laser',
    cnName: '轨道激光',
    code: ['right', 'down', 'up', 'right', 'down'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Orbital Napalm Barrage',
    cnName: '轨道凝固汽油火力网',
    code: ['right', 'right', 'down', 'left', 'right', 'up'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Orbital Railcannon Strike',
    cnName: '轨道炮攻击',
    code: ['right', 'up', 'down', 'down', 'right'],
    category_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  },
];

const HANGER = [
  {
    name: 'Eagle Strafing Run',
    cnName: '飞鹰机枪扫射',
    code: ['up', 'right', 'right'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Eagle Airstrike',
    cnName: '飞鹰空袭',
    code: ['up', 'right', 'down', 'right'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Eagle Cluster Bomb',
    cnName: '飞鹰集束炸弹',
    code: ['up', 'right', 'down', 'down', 'right'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Eagle Napalm Airstrike',
    cnName: '飞鹰凝固汽油弹',
    code: ['up', 'right', 'down', 'up'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Jump Pack',
    cnName: '喷气背包',
    code: ['down', 'up', 'up', 'down', 'up'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Eagle Smoke Strike',
    cnName: '飞鹰烟雾攻击',
    code: ['up', 'right', 'up', 'down'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Eagle 110MM Rocket Pods',
    cnName: '飞鹰110',
    code: ['up', 'right', 'up', 'left'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Eagle 500KG Bomb',
    cnName: '飞鹰500KG',
    code: ['up', 'right', 'down', 'down', 'down'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Eagle Rearm',
    cnName: '飞鹰重新武装',
    code: ['up', 'up', 'left', 'up', 'right'],
    category_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
  },
];

const BRIDGE = [
  {
    name: 'Orbital Precision Strike',
    cnName: '轨道精准攻击',
    code: ['right', 'right', 'up'],
    category_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
  },
  {
    name: 'Orbital Gas Strike',
    cnName: '轨道毒气攻击',
    code: ['right', 'right', 'down', 'right'],
    category_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
  },
  {
    name: 'Orbital EMS Strike',
    cnName: '轨道电磁冲击波',
    code: ['right', 'right', 'left', 'down'],
    category_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
  },
  {
    name: 'Orbital Smoke Strike',
    cnName: '轨道烟雾攻击',
    code: ['right', 'right', 'down', 'up'],
    category_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
  },
  {
    name: 'HMG Emplacement',
    cnName: '重机枪支架',
    code: ['down', 'up', 'left', 'right', 'right', 'left'],
    category_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
  },
  {
    name: 'Shield Generator Relay',
    cnName: '防护罩生成中继器',
    code: ['down', 'down', 'left', 'right', 'left', 'right'],
    category_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
  },
  {
    name: 'Tesla Tower',
    cnName: '特斯拉塔',
    code: ['down', 'up', 'right', 'up', 'left', 'right'],
    category_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
  },
];

const ENGINEERING_BAY = [
  {
    name: 'Anti-Personnel Minefield',
    cnName: '反步兵雷区',
    code: ['down', 'left', 'up', 'right'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Supply Pack',
    cnName: '补给背包',
    code: ['down', 'left', 'down', 'up', 'up', 'down'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Grenade Launcher',
    cnName: '榴弹发射器',
    code: ['down', 'left', 'up', 'left', 'down'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Laser Cannon',
    cnName: '激光炮',
    code: ['down', 'left', 'down', 'up', 'left'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Incendiary Mines',
    cnName: '燃烧地雷区',
    code: ['down', 'left', 'left', 'down'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: '“Guard Dog” Rover',
    cnName: '护卫犬无人机',
    code: ['down', 'up', 'left', 'up', 'right', 'right'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Ballistic Shield Backpack',
    cnName: '防弹护盾背包',
    code: ['down', 'left', 'down', 'down', 'up', 'left'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Arc Thrower',
    cnName: '电弧发射器',
    code: ['down', 'right', 'down', 'up', 'left', 'left'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Quasar Cannon',
    cnName: '类星体加农炮',
    code: ['down', 'down', 'up', 'left', 'right'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
  {
    name: 'Shield Generator Pack',
    cnName: '防护罩生成包',
    code: ['down', 'up', 'left', 'right', 'left', 'right'],
    category_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
  },
];

const ROBOTICS_WORKSHOP = [
  {
    name: 'Machine Gun Sentry',
    cnName: '哨戒机枪',
    code: ['down', 'up', 'right', 'right', 'up'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: 'Gatling Sentry',
    cnName: '加特林哨戒炮',
    code: ['down', 'up', 'right', 'left'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: 'Mortar Sentry',
    cnName: '迫击哨戒炮',
    code: ['down', 'up', 'right', 'right', 'down'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: '“Guard Dog”',
    cnName: '护卫犬',
    code: ['down', 'up', 'left', 'up', 'right', 'down'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: 'Autocannon Sentry',
    cnName: '自动哨戒炮',
    code: ['down', 'up', 'right', 'up', 'left', 'up'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: 'Rocket Sentry',
    cnName: '火箭哨戒炮',
    code: ['down', 'up', 'right', 'right', 'left'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: 'EMS Mortar Sentry',
    cnName: '电磁冲击哨戒炮',
    code: ['down', 'up', 'right', 'down', 'right'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: 'Patriot Exosuit',
    cnName: '爱国者机甲',
    code: ['left', 'down', 'right', 'up', 'left', 'down', 'down'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
  {
    name: 'Emancipator Exosuit',
    cnName: '解放者机甲',
    code: ['left', 'down', 'right', 'up', 'left', 'down', 'up'],
    category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
  },
];

const CHEMICAL_AGENTS = [
  {
    name: 'Sterilizer',
    cnName: '灭菌器',
    code: ['down', 'left', 'up', 'down', 'left'],
    category_id: '06a89b98-cc7a-46ac-a8fb-7bbf12d5cb78',
  },
  {
    name: 'Guard Dog Breath',
    cnName: '护卫犬腐息',
    code: ['down', 'up', 'left', 'up', 'right', 'up'],
    category_id: '06a89b98-cc7a-46ac-a8fb-7bbf12d5cb78',
  },
];

const GENERAL_STRATEGEMS = [
  {
    name: 'Resupply',
    cnName: '重新补给',
    code: ['down', 'down', 'up', 'right'],
    category_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  },
  {
    name: 'Reinforce',
    cnName: '增援',
    code: ['up', 'down', 'right', 'left', 'up'],
    category_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  },
  {
    name: 'SOS Beacon',
    cnName: 'SOS信标',
    code: ['up', 'down', 'right', 'up'],
    category_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  },
  {
    name: 'Hellbomb',
    cnName: '地狱火',
    code: ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'],
    category_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  },
  {
    name: 'SEAF Artillery',
    cnName: '超级地球大炮',
    code: ['right', 'up', 'up', 'down'],
    category_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
  },
];

const STRATAGEMS = [
  ...PATRIOTIC_ADMINISTRATION_CENTER,
  ...ORBITAL_CANNONS,
  ...HANGER,
  ...BRIDGE,
  ...ENGINEERING_BAY,
  ...ROBOTICS_WORKSHOP,
  ...CHEMICAL_AGENTS,
  ...GENERAL_STRATEGEMS,
];

module.exports = {
  CATEGORIES,
  STRATAGEMS,
};