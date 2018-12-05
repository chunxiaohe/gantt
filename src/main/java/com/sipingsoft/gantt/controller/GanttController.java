package com.sipingsoft.gantt.controller;

import com.sipingsoft.gantt.entity.GanttEntity;
import com.sipingsoft.gantt.util.PageUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * @author HeChunXiao
 * @since 2018-10-11 上午 11:49
 */
@RestController
public class GanttController {

    @GetMapping("/getGantt")
    public PageUtil GanttList(){
        List<GanttEntity> list  = new ArrayList<>();
        //one
        GanttEntity ganttEntity1 = new GanttEntity();
        ganttEntity1.setId(1);
        ganttEntity1.setName("龙行营销");
        ganttEntity1.setDesc("课程管理");
        ganttEntity1.setLeader("A");
        ganttEntity1.setStartTime(1522166400000L);
        ganttEntity1.setEndTime(1528300800000L);
        list.add(ganttEntity1);
        //two
        GanttEntity ganttEntity2 = new GanttEntity();
        ganttEntity2.setId(2);
        ganttEntity2.setName("降了吖");
        ganttEntity2.setDesc("降压产品");
        ganttEntity2.setLeader("B");
        ganttEntity2.setStartTime(1528992000000L);
        ganttEntity2.setEndTime(1534262400000L);
        list.add(ganttEntity2);
        //three
        GanttEntity ganttEntity3 = new GanttEntity();
        ganttEntity3.setId(3);
        ganttEntity3.setName("财政局");
        ganttEntity3.setDesc("报表统计");
        ganttEntity3.setLeader("C");
        ganttEntity3.setStartTime(1533830400000L);
        ganttEntity3.setEndTime(1536508800000L);
        list.add(ganttEntity3);
        //four
        GanttEntity ganttEntity4 = new GanttEntity();
        ganttEntity4.setId(4);
        ganttEntity4.setName("旺小宝");
        ganttEntity4.setDesc("智慧城市");
        ganttEntity4.setLeader("D");
        ganttEntity4.setStartTime(1533052800000L);
        ganttEntity4.setEndTime(1538323200000L);
       list.add(ganttEntity4);
        //five
        GanttEntity ganttEntity5 = new GanttEntity();
        ganttEntity5.setId(5);
        ganttEntity5.setName("SmartOne");
        ganttEntity5.setDesc("综合型产品");
        ganttEntity5.setLeader("E");
        ganttEntity5.setStartTime(1517414400000L);
        ganttEntity5.setEndTime(1538323200000L);
       list.add(ganttEntity5);

        return new PageUtil(200,list,true,20);
    }
}
