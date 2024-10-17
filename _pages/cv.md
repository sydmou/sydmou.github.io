---
layout: cv
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}
<p style="font-size: 2em; font-weight: bold;">Zhang Hao / Curriculum Vitae</p>
[zhanghaousm@mgmail.com](mailto:zhanghaousm@mgmail.com)


## Education

* **PhD, Artificial Intelligence, Universiti Sains Malaysia** <span style="float: right;">Nov 2016 - Now</span><br>
  <span class='desc'>Thesis: Aspect-Category-Opinion-Sentiment Quad Extraction With Implicit Aspects \\
   And Opinions Using Pre-Trained Language Models And Machine Learning Methods.</span><br>
  <span class='desc'>Supervised by Cheah Yu-N</span><br>
  <span class='desc'>Examiner:</span>
* **MSc (Bac5 , Paris Campus) Computer Science, SUPINFO International University** <span style="float: right;">Oct 2014 - Oct 2015</span>\
  <span class='desc'>With distinction. Final Fulltime Internship: iHealth Labs Europe.</span>
* **MSc (Bac4 , Rennes Campus) Computer Science, SUPINFO International University** <span style="float: right;">Oct 2013 - Oct 2014</span>\
  <span class='desc'>With distinction. Final part-time Internship: Vivaneo Inc. Paris</span>
* **BSc (Bac +1, +2, +3, China Tianjin Campus) Computer Science, SUPINFO International University** <span style="float: right;">Sep 2009 - Jun 2013</span>\
  <span class='desc'>Final project: A farm-based web game design and development.</span>

## Working Experience

* **Lecturer, Cangzhou Normal University** <span style="float: right;">Sep 2018 - Present</span>\
   <span class='desc'>Led the construction and development of the IDC Data Center. </span>
* **iOS Engineer, iHealth Labs China (Tianjin Office)** <span style="float: right;">Jan 2016 - Jun 2018</span>\
   <span class='desc'>Led the development of a Nurse App, empowering doctors to monitor \\ patients' 24-hour blood pressure and ECG data in real time. </span>\
   <span class='desc'>Led X chronic disease management project, collaboration with the U.S. Department of Defense and Care Innovation Inc. </span>\
   <span class='desc'>Pioneered chronic disease management solutions for U.S. veterans, enhancing care coordination and patient outcomes. </span>
* **iOS Engineer, iHealth Labs USA (Silicon Valley Office)**<span style="float: right;">Oct 2016 - Dec 2016</span>\
   <span class='desc'>Directed designing and developing a nurse app project for Mirus Hospital in Australia. </span>\
   <span class='desc'>Led key projects within iHealth’s American team, driving innovation in healthcare technology solutions. </span>
* **iOS Engineer Intern, iHealth Labs Europe (Paris Office)**<span style="float: right;">June 2015 - Oct 2015</span>\
   <span class='desc'>Contributed to developing iHealth Europe’s B2B Medical Project. </span>\
   <span class='desc'>Authored comprehensive iHealth API and SDK interface documentation in English and French. </span>\
   <span class='desc'>Assisted in the design of the iHealth European Security Cloud Architecture. </span>
* **iOS Engineer Intern, Vivaneo Inc** <span style="float: right;">June 2014 - Oct 2015</span>\
   <span class='desc'>Participated in software development and support for iOS applications. </span>

<div class="page-break"></div>

## Publications

<span style="color: orange;">●</span> denotes my role as <span style="color: orange;">(Co-)senior author(s)</span>, whereas <span style="color: teal;">■</span> denotes my role as <span style="color: teal;">main author(s)</span>.
###  Conferences
<div class="compact-ul">
<ul>
{% for paper in site.data.paper.conference %}
<li class="{% if paper.author and paper.author == 'first' %}first-author{% elsif paper.author and paper.author == 'last' %}last-author{% else %}default-author{% endif %}">
    {% if paper.url %}<a href="{{ paper.url }}">{{ paper.title }}</a>{% else %}<strong>{{ paper.title }}</strong>{% endif %}. <i>{{ paper.authors | raw }}</i> (<b>{{ paper.venue | raw }}</b>, {{ paper.date | raw }})
    {% if paper.notes != null %} -- {{ paper.notes | raw }}
    {% endif %}
</li>
{% endfor %}
</ul>
</div>

### Journals
<div class="compact-ul">
<ul>
{% for paper in site.data.paper.workshop %}
<li class="{% if paper.author and paper.author == 'first' %}first-author{% elsif paper.author and paper.author == 'last' %}last-author{% else %}default-author{% endif %}">
    {% if paper.url %}<a href="{{ paper.url }}">{{ paper.title }}</a>{% else %}<strong>{{ paper.title }}</strong>{% endif %}. <i>{{ paper.authors | raw }}</i> (<b>{{ paper.venue | raw }}</b>, {{ paper.date | raw }})
    {% if paper.notes != null %} -- {{ paper.notes | raw }}
    {% endif %}
</li>
{% endfor %}
</ul>
</div>




