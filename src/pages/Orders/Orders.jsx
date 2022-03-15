import React, {useContext, useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import axios from "axios";
import AppContext from "../../context";

function Orders({onAddFavourite}) {

    const {setLoading, loading} = useContext(AppContext);


    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const resOrd = await axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/orders");
                setLoading(false);

                setOrders(resOrd.data.map(obj => obj.items).flat());
            } catch (e) {
                alert("Error fetch orders");
                console.log(e);
            }


        }
        fetchOrders();
    }, [])

    return (
        <div className="content">
            <div className="contentTop">
                <h1>Orders</h1>
            </div>
            {
                <div className="sneakers">
                    {
                        (loading ? [...Array(10)] : orders)
                            .map((snk, i) => <Card key={i}
                                                   {...snk}
                                                   onAddFavourite={onAddFavourite}
                                                   loading={loading}/>)
                    }
                </div>
            }

        </div>
    );
}

export default Orders;