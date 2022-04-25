# Use ----------------------------------------

library(shiny)


addResourcePath('src','www')


ui <- htmlTemplate ("index.html") #use this for shinyapps.io deployment


server <- shinyServer(function(input, output) {})


shinyApp(ui = ui, server = server)