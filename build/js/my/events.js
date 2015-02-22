function myEvents(){

    console.log('listing my events')    
    
    $.get("https://api.github.com/users/spencehood/events", github, function(data) {

        // Q: What is the parameter 'github'? Where was it defined? What's the purpose? 

        // Q: Why is JSON.parse no longer necessary?
        var events = data
        
        // Q. Why are these templates files stored in a separate folder inside contents/?
        $.get("/git-jquery/templates/eventList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: events})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)
            $("#details").html('')

        })

    })

}