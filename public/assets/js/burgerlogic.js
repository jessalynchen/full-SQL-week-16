$(function() {
    $('.devourUndevour').on('click', (e) => {
        e.preventDefault();
        
        var id = $(this).data("devourid");
        var newdevour  = {
            devoured: 1
        }
        $.ajax("/api/burgers/" + id , {
            type: 'PUT',
            data: newdevour
        }).then(() => {
            location.reload();
        });
    });

    $('.burgerForm').on('submit', (e) => {
        e.preventDefault();

        var burger_name = $('#burger_name').val().trim();
        if(burger_name !== '')
        {
            $.ajax('/api/burgers', {
                type: 'POST',
                data: {
                    burger_name: burger_name,
                    devoured: 0
                }
            }).then(() => {
                console.log("Created Successfully");
                location.reload();
            });
        }
    });  
});