import React,{Component} from 'react';
import Nav from './nav';
import Footer from './footer';

class PostMessage extends Component{
    render(){
        return <div>
            <Nav/>
            <div>
                <div className="message">
                    <div >
                        <label className="location">名称：</label>
                        <input type="text" className="inputStyle" id="goodsName"  autoFocus="autoFocus"/>
                    </div>
                    <div>
                        <label className="location">详细描述：</label>
                        <input type="text" className="inputStyle" id="discription"/>
                    </div>
                    <div>
                        <label className="location">价格：</label>
                        <input type="text" className="inputStyle" id="price"/>
                    </div>
                    <div>
                        <label className="location">数量：</label>
                        <input type="text" className="inputStyle" id="count"/>
                    </div>
                    <div>
                        <label className="location">联系方式：</label>
                        <input type="text" className="inputStyle" id="tel"/>
                    </div>
                    <div>
                        <label className="location">照片：</label>
                        <input type="text" className="inputStyle" id="image"/>
                    </div>
                    <div>
                        <button type="submit" className="buttonType submitStyle">提交</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    }
}

export default PostMessage;