package com.sipingsoft.gantt.util;


import java.util.List;

/**
 * @author HeChunXiao
 * @since 2018-10-11 上午 11:50
 */
public class PageUtil<T> {

    private static final Boolean status = true;

    private Integer code;
    private List<T> data;
    private Boolean success;
    private Integer total;

    public PageUtil() {
        this.success = status;
    }

    public PageUtil(Integer code, List data, Boolean success, Integer total) {
        this.code = code;
        this.data = data;
        this.success = success;
        this.total = total;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public List<T> getData() {
        return data;
    }

    public void setDate(List<T> data) {
        this.data = data;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }
}
