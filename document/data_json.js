
//这个是首页的数据
var homeData = {
    //当前在线车辆数
    currentCars: '',

    //激活设备数
    activeDevices: '',

    //失联设备数
    lossDevices: '',

    //折线图数据
    lineData: {
        [{
            //日期
            name: 'Sat Oct 04 1997 00:00:00 GMT+0800 (中国标准时间)',
            //[日期，设备数量]
            value: ['1997/10/4','100']
        }
        {},
        {},
        ...
        ]

    },

    //地图数据 [{name:"地名", value: [经度, 纬度, 车辆数目]}]
    DevicesMap: [{
        name: "海门",
        value:[121.15,31.89, 10]
    },
    {},
    {},
    ...
    ]
}