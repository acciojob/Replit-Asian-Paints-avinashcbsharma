
    document.addEventListener("DOMContentLoaded", function() {
      const gridContainer = document.getElementById("grid-container");
      const blockIdInput = document.getElementById("block_id");
      const colorInput = document.getElementById("colour_id");
      const changeButton = document.getElementById("change_button");
      const resetButton = document.getElementById("reset_button");

      // Create grid items
      function createGridItems() {
        for (let i = 1; i <= 9; i++) {
          const gridItem = document.createElement("div");
          gridItem.id = `grid-item-${i}`;
          gridItem.classList.add("grid-item");
          gridItem.innerText = i;
          gridContainer.appendChild(gridItem);
        }
      }

      // Change color of a specific grid item
      function changeColor() {
        const blockId = parseInt(blockIdInput.value);
        const color = colorInput.value;

        // Reset all to transparent
        resetGrid();
      
        const targetGridItem = document.getElementById(`grid-item-${blockId}`);
        if (targetGridItem) {
          targetGridItem.style.backgroundColor = color;
        }
      }

    
      function resetGrid() {
        const gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach(item => {
          item.style.backgroundColor = "transparent";
        });
      }

   
      changeButton.addEventListener("click", changeColor);
    
      resetButton.addEventListener("click", resetGrid);
  
      createGridItems();
    });
