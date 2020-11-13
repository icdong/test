import React, { useState } from 'react';
import { Button, Select } from 'antd';
import './App.css'
import { useFetchData } from './useFetchData';

function App() {
    // 用法
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    let list: object[] = []
    let total: number = 0
    let allPage: number = 0
    let { response, isLoading, error } = useFetchData('/api/getlist', page, pageSize)

    if (response !== undefined) {
        list = response.data.list
        total = response.data.total
        allPage = Math.ceil(total/pageSize)
    }

    const handleChange = (value: number) => {
      setPageSize(value)
    }
    // 上一页
    const prev = () => {
        if (page === 1) return
        setPage(page - 1)
    }
    // 下一页
    const next = () => {
        if (page === allPage) return
        setPage(page + 1)
    }

    const { Option } = Select;
    const listItems = list.map((item:any) =>
        <li key={item['id']}>
            {item['name']}
        </li>
    );
    return (
        <div>
            当前页：{page}; 总条数：{total};总页数：{allPage}

            <Select className="margin_left" value={pageSize} style={{ width: 120 }} onChange={handleChange}>
              <Option value="5">5条/页</Option>
              <Option value="10">10条/页</Option>
              <Option value="15">15条/页</Option>
            </Select>

            <Button className="margin_left" type="primary" onClick={prev}>上一页</Button>
            <Button className="margin_left" type="primary" onClick={next}>下一页</Button>

            {/* loading处理*/}
            {isLoading && <p>loading...</p>}

            {/* 错误处理*/}
            {error && <p>error!</p>}

            {
                (!isLoading && !isLoading)
                && <ul>{listItems}</ul>
            }
        </div>
    );
}

export default App;
