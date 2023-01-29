$(document).ready(function() {
    console.log("ready");
 
    // Wakatime API stats
    let wakatime = $("#wakatime");
    let wakaStats = $("#waka-stats");
    if (wakatime) {
        let act =
            "https://wakatime.com/api/v1/users/kebab/summaries?start=2022-06-03&end=2022-06-04";
        let langs =
            "/my/languages";
 
        // Coding Activity
        let wakaTime = $("#waka-time");
        let week = [];
        let day = [];
        $.ajax({
            type: 'GET',
            url: 'https://wakatime.com/share/@Kebab/c99278ee-db04-4627-858f-8aca37b37453.json',
                        dataType: 'jsonp',
            beforeSend: function() {
                wakaTime.html("Loading...");
            },
            success: function(response) {
                // Map Wakatime response and push to week object.
                $.map(response, function(data) {
                    for (let i = 0; i < data.length; i++) {
                        week.push(data[i]);
                    }
                });
                // Map each day and push to day object, return the total_seconds property value.
                let sec = $.map(week, function(day) {
                    for (let i = 0; i < day.length; i++) {
                        day.push(day[i]);
                    }
                    return day.grand_total.total_seconds;
                });

                // Inject into Dashboard HTML
                
                wakaTime.html(response.data.grand_total.human_readable_total)
            }
        }); // end Coding Activity
 
        // Languages
        let wakaList = $("#waka-list");
        let langStr = "";
        let languages = [];
        let lang = [];
        $.ajax({
            type: "GET",
            url: langs,
            dataType: "jsonp",
            beforeSend: function() {
                wakaList.html("Loading...");
            },
            success: function(response) {
                $.map(response, function(data) {
                    for (let i = 0; i < data.length; i++) {
                        languages.push(data[i]);
                    }
                });
                for (let i = 0; i < languages.length; i++) {
                    langStr += languageTemplate(
                        languages[i].name,
                        languages[i].percent
                    );
                }
                wakaList.html(langStr);
            }
        }); // End Lnaguage
    } // end Wakatime API stats
 
    // Returns an li for the wakatime language API
    function languageTemplate(name, percent) {
        return `<li>${name} - ${percent}%</div>`;
    }
 
    // Add function, used with the .reduce() function
    function add(a, b) {
        return a + b;
    }
}); // End ready function