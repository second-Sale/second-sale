import React,{Component} from "react";

class Footer extends Component{
    render(){
        return <div className="content">
            <div className="spanType">
                 <span className="spanStyle">
                    30天无忧退货
                 </span>
                 <span className="spanStyle">
                    线上线下交付
                 </span>
                 <span className="spanStyle">
                    二手品质保证
                 </span>
            </div>
            <hr/>
            <div>
                <ul className="ulStyle">
                    <li>关于我们</li>
                    <li>帮助中心</li>
                    <li>售后服务</li>
                    <li>配送与验收</li>
                    <li>商务合作</li>
                    <li>企业采购</li>
                    <li>友情链接</li>
                </ul>
                <div className="location">
                    公司版权所有 © 1997-2017   售后服务电话：15829211124
                </div>
            </div>
        </div>;
    }
}

export default Footer;
