<template>
    <div id="root">
        <ul v-for="(item, index) in cartItems" v-bind:key="index">
            <li>
                {{item.productName}} {{item.quantity}}
            </li>
        </ul>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table>
                            <thead>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in cartItems" v-bind:key="index">
                                    <td>{{item.productName}}</td>
                                    <td>{{item.price}}</td>
                                    <td><input type="text" id="quantity" v-model.number="item.quantity"></td>
                                    <td>$ {{item.price*item.quantity}}</td>
                                    <td><button @click="deleteItem(index)" class="btn btn-danger">
                                        <i class="fa fa-trash"></i>
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                        Order total: {{totalAmount}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CartItems',
    props:['cartItems', 'itemCount'],
    methods:{
        deleteItem:function(index){
            this.cartItems.splice(index,1);
        }
    },
    computed:{
        totalAmount:function(){
            var total=0;
            var data="";
            for (data of this.cartItems){
                total+=data.price*data.quantity
            }
            return total;
        }
    }
}
</script>