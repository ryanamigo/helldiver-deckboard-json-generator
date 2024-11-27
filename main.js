const { STRATAGEMS, CATEGORIES } = require('./src/actions')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp');

async function svgToJpegBase64(filePath) {
  try {
    // 读取 SVG 文件内容
    const svgContent = fs.readFileSync(filePath);

    // 使用 Sharp 将 SVG 转换为 JPEG 并返回 Base64
    const jpegBuffer = await sharp(svgContent)
      .jpeg() // 转换为 JPEG 格式
      .toBuffer();

    // 转为 Base64 URL
    const base64Url = `data:image/jpeg;base64,${jpegBuffer.toString('base64')}`;
    return base64Url;
  } catch (error) {
    console.error('Error converting SVG to JPEG:', error);
  }
}

// 把CATEGORIES 和 STRATAGEMS 合并成树状结构
const getTree = () => {
  const tree = []
  for (const category of CATEGORIES) {
    const stratagems = []
    for (const stratagem of STRATAGEMS) {
      if (stratagem.category_id === category.id) {
        stratagems.push(stratagem)
      }
    }
    tree.push({
      ...category,
      stratagems
    })
  }
  return tree
}

// actions结构 ['down', 'down', 'up', 'right']
const getCommandByActions = (actions) => {
  const delayCommand = {
      "action": "delay",
      "value": "20"
  }
  const command = [
    {
      "action": "down",
      "value": "CONTROL"
    },
    delayCommand,
    {
        "action": "up",
        "value": "CONTROL"
    },
    delayCommand
  ];
  actions.forEach((action) => {
    const value = action.toString().toUpperCase()
    const newCommand = [
      {
        action: 'down',
        value
      },
      delayCommand,
      {
        action: 'up',
        value
      },
      delayCommand
    ];
    command.push(...newCommand)
  })
  return JSON.stringify(command)
}

async function getGroups(tree) {
  const groups = []
  for (let categoryIndex = 0; categoryIndex < tree.length; categoryIndex++) {
    const category = tree[categoryIndex]
    const groupItem = {
      "name": "Group Name",
      "background": "#666666",
      "order": 0,
      "layout": 4,
      "image": null,
      "sort": null,
      "type": "buttons",
      "args": null,
      "width": 5,
      "height": 3,
      "converted": 1,
      "macros": []
    }
    groupItem.name = category.cnName;
    for(let index = 0; index < category.stratagems.length; index++) {
      const stratagem = category.stratagems[index]
      const x = index % 5;
      const y = Math.floor(index / 5);
      const svgFilePath = path.join(__dirname, `./stratagems/${category.name}/${stratagem.name}.svg`);
      const base64str = await svgToJpegBase64(svgFilePath)
      groupItem.macros.push({
        "board_id": index + 1,
        "title": stratagem.cnName,
        "img": base64str,
        "type": "advance-key",
        "command": getCommandByActions(stratagem.code),
        "position": null,
        "title_position": 0,
        "title_color": "#FFFFFF",
        "title_box_color": "#0000007F",
        "options": null,
        "color": "#000000",
        "icon_color": "",
        "icon_color2": "",
        "border_color": "",
        "shape": 0,
        "icon": null,
        "img2": "",
        "icon2": null,
        "color2": null,
        "shape2": 0,
        "border_color2": "",
        "title_position2": 0,
        "title_box_color2": "",
        "title_color2": "#ffffff",
        "position2": null,
        "x": x,
        "y": y,
        "w": 1,
        "h": 1,
        "mode": "button"
      })
    }
    groups.push(groupItem)
  }
  return groups
}


async function main() {
  const tree = getTree();
  const groups = await getGroups(tree);
  fs.writeFileSync('./groups.boardjson', JSON.stringify(groups))
  fs.writeFileSync('./groups.json', JSON.stringify(groups))
}

main();