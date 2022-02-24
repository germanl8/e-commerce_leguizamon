import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {

    return (

            <div>
                <FontAwesomeIcon icon={faCartShopping} id="icon-cart" />
            </div>


    )
}

export default CartWidget;