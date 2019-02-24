---
layout: default
---

# Programm

Die ersten Sessions und Speaker stehen schon fest. Weitere Inhalte und das detaillierte Programm werden wir in den nächsten Wochen laufend aktualisieren.

<ul class="session-list">
{% assign sorted_pages = site.pages | sort:"title" %}
{% for page in sorted_pages %}
	{% if page.page-category == "session" %}
<li><a href="{{ site.baseurl }}{{page.url}}">{{ page.title }}</a><br/>
        
                {% assign speakers = page.speaker-id | split: ' ' %}
                {% for speaker in speakers %}
                {% for speakerpage in site.pages %}
                        {% if speakerpage.page-category == "speaker" and speakerpage.url contains speaker %}
<span class="session-speaker">
<a href="{{ site.baseurl }}{{ speakerpage.url }}">{{ speakerpage.title }}, {{ speakerpage.company }}</a>
</span>
</li>
                        {% endif %}
                {% endfor %}
                {% endfor %}
	{% endif %}
{% endfor %}
</ul>


<!--<div class="container program">
<div class="row sessions">
        <div class="col-md-1 d-none d-md-block">Raum</div>
        <div class="col-md-3 d-none d-md-block">E09<br/></div>
        <div class="col-md-3 d-none d-md-block">10.07<br/></div>
        <div class="col-md-3 d-none d-md-block">15.04<br/></div>
        <div class="col-md-2 d-none d-md-block">15.05<br/></div>
</div>
<div class="row break">
        <div class="col-md-1">08:30</div>
        <div class="col-md-3">Check-In / Kaffee, Getränke und kleine Snacks</div>
        <div class="col-md-8 d-none d-md-block"></div>
</div>
<div class="row sessions">
        <div class="col-md-1">09:15</div>
        <div class="col-md-3">{% include session-card.html room='E09' slot=1 %}</div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
<div class="row sessions">
        <div class="col-md-1">09:55</div>
        <div class="col-md-3">{% include session-card.html room='E09' slot=2 %}</div>
        <div class="col-md-3">{% include session-card.html room='10.07' slot=2 %}</div>
        <div class="col-md-3">{% include session-card.html room='15.04' slot=2 %}</div>
        <div class="col-md-2">{% include session-card.html room='15.05' slot=2 %}</div>
</div>
<div class="row break">
        <div class="col-md-1">10:45</div>
        <div class="col-md-3">Kaffee, Getränke und kleine Snacks</div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-5 d-none d-md-block">Kaffee, Getränke und kleine Snacks</div>
</div>
<div class="row sessions">
        <div class="col-md-1">11:10</div>
        <div class="col-md-3">{% include session-card.html room='E09' slot=3 %}</div>
        <div class="col-md-3">{% include session-card.html room='10.07' slot=3 %}</div>
        <div class="col-md-3">{% include session-card.html room='15.04' slot=3 %}</div>
        <div class="col-md-2">{% include session-card.html room='15.05' slot=3 %}</div>
</div>
<div class="row break">
        <div class="col-md-1">12:00</div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-5">Warmes Mittagessen</div>
</div>
<div class="row sessions">
        <div class="col-md-1">13:00</div>
        <div class="col-md-3">{% include session-card.html room='E09' slot=4 %}</div>
        <div class="col-md-3">{% include session-card.html room='10.07' slot=4 %}</div>
        <div class="col-md-3">{% include session-card.html room='15.04' slot=4 %}</div>
        <div class="col-md-2">{% include session-card.html room='15.05' slot=4 %}</div>
</div>
<div class="row break">
        <div class="col-md-1">13:50</div>
        <div class="col-md-3">Kaffee, Getränke und Kuchen</div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-5 d-none d-md-block">Kaffee, Getränke und Kuchen</div>
</div>
<div class="row sessions">
        <div class="col-md-1">14:05</div>
        <div class="col-md-3">{% include session-card.html room='E09' slot=5 %}</div>
        <div class="col-md-3">{% include session-card.html room='10.07' slot=5 %}</div>
        <div class="col-md-3">{% include session-card.html room='15.04' slot=5 %}</div>
        <div class="col-md-2">{% include session-card.html room='15.05' slot=5 %}</div>
</div>
<div class="row break">
        <div class="col-md-1">14:55</div>
        <div class="col-md-3">Kaffee, Getränke und Kuchen</div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-5 d-none d-md-block">Kaffee, Getränke und Kuchen</div>
</div>
<div class="row sessions">
        <div class="col-md-1">15:10</div>
        <div class="col-md-3">{% include session-card.html room='E09' slot=6 %}</div>
        <div class="col-md-3">{% include session-card.html room='10.07' slot=6 %}</div>
        <div class="col-md-3">{% include session-card.html room='15.04' slot=6 %}</div>
        <div class="col-md-2">{% include session-card.html room='15.05' slot=6 %}</div>
</div>
<div class="row sessions">
        <div class="col-md-1">16:00</div>
        <div class="col-md-3">
                <h3>Abschluss</h3>
                <p>Coding Club Linz</p>
        </div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-3 d-none d-md-block"></div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
</div>

## Räume

Raum | Stockwerk | Beschreibung
- | - | -
E09 | Ergeschoß | Im großen Veranstaltungssaal des Wissensturm starten wir diesmal ab 08:30 mit dem Check-In und einem kleine Frühstück. Danach findet dort gleich die Keynote statt. Anschließend gibt es dort weitere Sessions für das Azure Bootcamp.<br/>Du findest im Raum E09 den ganzen Tag über Kaffe, Getränke und kleine Snacks zur Stärkung.
09.08 | 9. Stock | Junior Bootcamp Sessions
10.07 | 10. Stock | Azure Bootcamp Sessions
15.04 | 15. Stock | Azure Bootcamp Sessions
15.05 | 15. Stock | Azure Bootcamp Sessions
{: .table }

<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="confirmLoginModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <p>Damit deine Sessions gespeichert werden können, musst du dich anmelden. Du kannst dafür dein Microsoft oder Google Konto verwenden, 
        oder du vergibts einen eigenen Usernamen und ein Passwort.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="modal-btn-login" onclick="login()">Weiter zum Login</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button>
      </div>
    </div>
  </div>
</div>-->

<script>
        $(function() {
                $('.program-session-content').readmore({
                        collapsedHeight: 150,
                        moreLink: '<div class="expand-content" onclick="disabledEventPropagation(event)"><a><i class="fas fa-chevron-down"></i></a></div>',
                        lessLink: '<div class="collapse-content" onclick="disabledEventPropagation(event)"><a><i class="fas fa-chevron-up"></i></a></div>'
                });
        });

        function disabledEventPropagation(e) {
                if (e.stopPropagation) {
                        e.stopPropagation();
                } else if (window.event) {
                        window.event.cancelBubble = true;
                }
        }

        $( document ).ready(function() {
                initializeSessions();
        });
</script>