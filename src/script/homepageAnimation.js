// var switcher = document.getElementById('muj-testovy-switcher');
// UIkit.switcher(switcher).show(1);


function change_switcher_next() {
    UIkit.switcher(document.getElementById("muj-testovy-switcher")).show("next")
}




function run_switcher_next() {
    setTimeout(() => { change_switcher_next(); run_switcher_next() }, 2500)
}
run_switcher_next()