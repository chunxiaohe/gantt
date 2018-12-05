$(
    function () {

        "use strict";
        $.get("/getGantt",function(re){
            if(re.success){
                var dataSource = []
                var data = re.data;
                for(var i=0;i<re.data.length;i++){
                    var source = {};
                    var value = {};
                    var val = [];
                    source.name =data[i].name;
                    source.desc = data[i].desc;
                    value.from = data[i].startTime;
                    value.to = data[i].endTime;
                    value.label = data[i].name;
                    value.dataObj = data[i];
                    //value.customClass = data[i].customClass;
                    val.push(value);
                    source.values = val;
                    dataSource.push(source)
                }
                //初始化gantt
                $(".gantt").gantt({
                    source:dataSource,
                    navigate: 'scroll',//buttons  scroll
                    scale: "weeks",// months  weeks days  hours
                    maxScale: "months",
                    minScale: "days",
                    itemsPerPage: 10,
                    mouths:'月份名称',
                    startPos:'/Date(1293811200000)/',
                    waitText:'正在努力加载...',//等待时提示的文本
                    scrollToToday:true,
                    months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    dow:['日','一','二','三','四','五','六'],
                    onItemClick: function (data) {
                        alert(data);
                        console.log(data);
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


            }
        })
    }
)