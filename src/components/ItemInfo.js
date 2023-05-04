import {Form} from "react-bootstrap";

export default function AddReciept() {
  return (
    <>
        <Form>
            <div class="row mb-4" />
            <Form.Group class="col-md-6">
                <label for="price">Price</label>
                <input type="text" id="price" class="form-control" placeholder="$13.99" />
            </Form.Group>
            <div class="row mb-4" />
            <Form.Group class="col-md-6">
                <label for="quantity">Quantity</label>
                <select id="quantity" class="form-control">
                    <option selected="" />
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </Form.Group>
            <div class="row mb-4" />
            <Form.Group class="col-md-6">
                <label for="item">Item Name</label>
                <input type="test" id="item" class="form-control" />
            </Form.Group>
        </Form>
    </>
  );
}
