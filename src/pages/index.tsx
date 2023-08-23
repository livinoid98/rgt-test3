import {useEffect, useState, useRef} from "react";
import axios from "axios";

const TestMarket = () => {
    const [order, setOrder] = useState<any>();
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayString = useRef<any>();

    useEffect(() => {
        axios.get('http://211.44.24.167:9002/codingTest/getLast.php').then((data) => {
            setOrder(data.data[0]);
        }).then(() => {
            const currentDate = new Date(order?.date_time.split(" ")[0]);
            console.log("currentDate", currentDate);
            const dayOfWeek = currentDate.getDay();
            dayString.current.value = daysOfWeek[dayOfWeek];
        })
    }, [])

    return (
        <>
            <div className="order-wrap">
                <div className="order-wrap-title">
                    <h3>
                        <b>RGT 테스트매장</b><br/>
                        어서오세요, RGT 테스트<br/>
                        매장입니다.
                    </h3>
                    <p>
                        주문내역을 확인하시고 주문 확인을 눌러주세요.<br/>
                        리뷰와 이벤트를 남겨주시면 음료할인이 진행됩니다.
                    </p>
                </div>
                <div className="order-wrap-content">
                    <h4>최종 주문확인</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>주문일</td>
                                <td>{order?.date_time.split(" ")[0]}(<input ref={dayString}/>)</td>
                            </tr>
                            <tr>
                                <td>주문자</td>
                                <td>{order?.orderer_name}</td>
                            </tr>
                            <tr>
                                <td>테이블번호</td>
                                <td>{order?.table_no}</td>
                            </tr>
                            <tr>
                                <td>주문번호</td>
                                <td>{order?.order_id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="button-wrap">
                    <button>이전화면</button>
                    <button>확인</button>
                </div>
            </div>
        </>
    )
}

export default TestMarket;