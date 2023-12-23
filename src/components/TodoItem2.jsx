function TodoItem2() {
  let itemName = "Go to Beach ";
  let purchaseDate = "23/12/2023";
  return (
    <div className="container">
      <div class="row kg-row">
        <div class="col-6">{itemName}</div>
        <div class="col-4">{purchaseDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
