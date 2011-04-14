
fcViews.agendaWeekSelector = AgendaWeekSelectorView;

function AgendaWeekSelectorView(element, calendar) {
        var t = this;



        // exports
        t.render = render;


        // imports
        AgendaView.call(t, element, calendar, 'agendaWeekSelector');
        var opt = t.opt;
        var renderAgenda = t.renderAgenda;
        var formatDates = calendar.formatDates;





        function render(date, delta) {

                if (delta) {
                        addDays(date, delta * 7);
                }
                t.start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
                t.end = addDays(cloneDate(t.start), 7);;
                t.visStart = cloneDate(t.start);
                t.visEnd = cloneDate(t.end);
                renderAgenda(7,false);
        }


}
