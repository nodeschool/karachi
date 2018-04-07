var $userForm = $('#userForm');
var $submitBtn = $('#saveBtn');

$userForm.on('submit', function (evt){
    
    evt.preventDefault();

    var nameField = $('#userName').val();
    var age = $('#age').val();
    
    if( !nameField || !age ) return;
    $submitBtn.attr('default', true );

    callAjax({
        url: "/users",
        method: "post",
        data: {
            name: nameField,
            age: age
        }
    })
    .then(function (){
        alert('Added successfully!');

        //Empty the form field
        $('#userName').val('');
        $('#age').val('');
    }, function (err){
        console.log('ERROR in saving user', err);
    })
    .always(function (){
        $submitBtn.attr('default', false);
    })
    /* .always(function (){
        $submitBtn.attr('default', false);
    })
    .success(function (){
        alert('Added successfully!');
    }).error(function (err){
        console.log('ERROR in saving user', err);
    }) */;
    
    return false;
})

function callAjax(config){
    return $.ajax({
        url: config.url,
        method: config.method,
        data: config.data
      });
}

function getUsers (){

}