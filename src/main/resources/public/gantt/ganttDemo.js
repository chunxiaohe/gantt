$(
    function () {
        //初始化gantt
        $(".ganttDemo").gantt({
            innit:{
                maxScale:'1569859200000',
                minScale:'1506787200000'
            },
            source: [

                {
                    name: "龙行营销",
                    desc: "课程管理",
                    values: [{
                        from: "/Date(1522166400000)/",
                        to: "/Date(1528300800000)/",
                        label: "龙行营销",
                        customClass: "ganttRed",
                        dataObj:'{"id":1,"name":"龙行营销","leader":"tom"}'
                    },{
                        name:"龙行营销子任务",
                        desc:"课程管理子任务",
                        values:[{
                            from: "/Date(1522166400000)/",
                            to: "/Date(1528300800000)/",
                            label: "龙行营销",
                            customClass: "ganttRed",
                            dataObj:'{"id":1,"name":"龙行营销","leader":"tom"}'
                        }]
                    }]
                }, {
                    name: "降了吖",
                    desc: "降压产品",
                    values: [{
                        from: "/Date(1528992000000)/",
                        to: "/Date(1534262400000)/",
                        label: "降了吖",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: "财政局",
                    desc: "统计报表",
                    values: [{
                        from: "/Date(1533830400000)/",
                        to: "/Date(1536508800000)/",
                        label: "财政局",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: "旺小宝",
                    desc: "智慧城市",
                    values: [{
                        from: "/Date(1533052800000)/",
                        to: "/Date(1538323200000)/",
                        label: "旺小宝",
                        customClass: "ganttBlue"
                    }]
                },{
                    name:'SmartOne',
                    desc:'综合产品',
                    values:[{
                        from: "/Date(1517414400000)/",
                        to: "/Date(1538323200000)/",
                        label:'SmartOne',
                        customClass:'ganttBlack'
                    }]
                }],
            navigate: 'scroll',//buttons  scroll
            scale: "weeks",// months  weeks days  hours
            maxScale: "months",
            minScale: "days",
            itemsPerPage: 10,
            mouths:'月份名称',
            startPos:'1293811200000',
            waitText:'正在努力加载...',//等待时提示的文本
            scrollToToday:true,
            months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            dow:['日','一','二','三','四','五','六'],
            onItemClick: function (data) {
                alert(data);
            },
            onAddClick: function (dt, rowId) {
                alert("Empty space clicked - add an item!");
            },
            onRender: function () {
                if (window.console && typeof console.log === "function") {
                    console.log("chart rendered");
                }
            }

        });





        //prettyPrint();
    }
)