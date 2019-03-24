---
layout: default
title: Junior Bootcamp 2019
showJuniorJumbotron: true
---

<div class="row">
<div class="col-sm" markdown="1">
Am **27. April 2019** werden im Rahmen des **[Global Azure Bootcamps](http://global.azurebootcamp.net)** auf der ganzen Welt hunderte Workshops zum Thema Cloud Computing und [Microsoft Azure](http://azure.microsoft.com) stattfinden. In Linz machen wir parallel zu dieser Veranstaltung auch wieder das **Junior Bootcamp**, das sich an **junge Coder zwischen 13 und 17 Jahren** richtet.

Habt ihr **schon etwas Erfahrung beim Programmieren** (z.B. mit Scratch, JavaScript, Python oder Ähnlichem)? Dann könnt Ihr im Junior Bootcamp zum ersten Mal Konferenz-Luft schnuppern. Ihr verbringt den Tag mit vielen Entwicklungs-Profis und könnt von international gefragten Expertinnen und Experten lernen.
</div>

<div class="col-sm" markdown="1">
Folgendes könnt Ihr beim Junior-Bootcamp erwarten:

* Sessions, die für Jugendliche mit wenig Programmiererfahrung geeignet sind
* Vortragende, die echte Profis auf ihrem Gebiet sind
* Ihr bekommt viele praktische Tipps, die Ihr sofort nutzen könnt
* Ihr seht, wie eine echte IT-Konferenz abläuft

Die Teilnahme am Event ist dank der [Sponsoren]({{ site.baseurl }}/sponsoren.html) kostenlos. 

</div>
</div>

<p class="text-center">
    <a class="btn btn-primary btn-lg" href="https://www.eventbrite.de/e/global-azure-bootcamp-austria-2019-tickets-55850997838"
        role="button">
        Zur Anmeldung
    </a>
</p>

# Programm

<div class="program">
<div class="session-container sessions">
{% assign sorted_pages = site.pages | sort:"title" %}
{% for page in sorted_pages %}
	{% if page.page-category == "junior-session" %}
<div class="session-item" onclick="location.href='{{ site.baseurl }}{{ page.url }}'">
<h3>{{ page.title }}</h3>
                {% assign speakers = page.speaker-id | split: ' ' %}
                {% for speaker in speakers %}
                {% for speakerpage in site.pages %}
                        {% if speakerpage.page-category == "speaker" and speakerpage.url contains speaker %}
<span class="session-speaker">
<a href="{{ site.baseurl }}{{ speakerpage.url }}">{{ speakerpage.title }}</a>
</span>

                        {% endif %}
                {% endfor %}
                {% endfor %}

<div class="program-session-content">
        <p class="">{{ page.content | markdownify }}</p>
</div>

<!-- {% if page.page-category == "session" %}
<p class="program-session-selected add" onclick="selectSession(event, '{{ page.url }}')"><span class="badge badge-pill badge-primary"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;merken</span></p>

<p class="program-session-selected remove" onclick="deselectSession(event, '{{ page.url }}')"><span class="badge badge-pill badge-primary"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;löschen</span></p>
{% endif %}-->
</div>
	{% endif %}
{% endfor %}

</div> 
</div>

<!--

<div class="container program junior-program">
<div class="row sessions">
        <div class="col-md-1 d-none d-md-block">Raum</div>
        <div class="col-md-2 d-none d-md-block">E09<br/></div>
        <div class="col-md-7 d-none d-md-block">09.08</div>
        <div class="col-md-2 d-none d-md-block">15. Stock</div>
</div>
<div class="row break">
        <div class="col-md-1">09:30</div>
        <div class="col-md-2">Check-In / Getränke und kleine Snacks</div>
        <div class="col-md-7 d-none d-md-block"></div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
<div class="row sessions">
        <div class="col-md-1">09:55</div>
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7">{% include session-card.html room='09.08' slot=2 %}</div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
<div class="row break">
        <div class="col-md-1">10:45</div>
        <div class="col-md-2">Getränke und kleine Snacks</div>
        <div class="col-md-7 d-none d-md-block"></div>
        <div class="col-md-2">Getränke und kleine Snacks</div>
</div>
<div class="row sessions">
        <div class="col-md-1">11:10</div>
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7">{% include session-card.html room='09.08' slot=3 %}</div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
<div class="row break">
        <div class="col-md-1">12:00</div>
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7 d-none d-md-block"></div>
        <div class="col-md-2">Warmes Mittagessen</div>
</div>
<div class="row sessions">
        <div class="col-md-1">13:00</div>
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7">{% include session-card.html room='09.08' slot=4 %}</div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
<div class="row break">
        <div class="col-md-1">13:50</div>
        <div class="col-md-2">Getränke und Kuchen</div>
        <div class="col-md-7 d-none d-md-block"></div>
        <div class="col-md-2">Getränke und Kuchen</div>
</div>
<div class="row sessions">
        <div class="col-md-1">14:05</div>
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7">{% include session-card.html room='09.08' slot=5 %}</div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
<div class="row break">
        <div class="col-md-1">14:55</div>
        <div class="col-md-2">Getränke und Kuchen</div>
        <div class="col-md-7 d-none d-md-block"></div>
        <div class="col-md-2">Getränke und Kuchen</div>
</div>
<div class="row sessions">
        <div class="col-md-1">15:10</div>
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7">{% include session-card.html room='09.08' slot=6 %}</div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
<div class="row sessions">
        <div class="col-md-1">16:00</div>
        <div class="col-md-2">
                <h3>Abschluss</h3>
                <p>Coding Club Linz</p>
        </div>
        <div class="col-md-7 d-none d-md-block"></div>
        <div class="col-md-2 d-none d-md-block"></div>
</div>
</div>

<p>&nbsp;</p>
<p class="text-center">
    <a class="btn btn-primary btn-lg" href="https://www.eventbrite.de/e/global-azure-bootcamp-austria-2019-tickets-55850997838"
        role="button">
        Zur Anmeldung
    </a>
</p>-->

<!-- ## Räume

Raum | Stockwerk | Beschreibung
- | - | -
E09 | Ergeschoß | Vor dem großen Veranstaltungssaal des Wissensturm starten wir ab 09:30 mit dem Check-In und einem kleine Frühstück. Danach geht's im 9. Stock mit dem Junior Bootcamp weiter.<br/>Du findest im Raum E09 den ganzen Tag über Getränke und kleine Snacks zur Stärkung.
09.08 | 9. Stock | Junior Bootcamp Sessions
15.05 | 15. Stock | Mittagessen und Getränke und Snacks in den Pausen
{: .table } -->
