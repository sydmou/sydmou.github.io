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
  <span class='desc'>Thesis: ASPECT-CATEGORY-OPINION-SENTIMENT QUAD EXTRACTION WITH IMPLICIT ASPECTS \\
   AND OPINIONS USING PRE-TRAINED LANGUAGE MODELS AND MACHINE LEARNING METHODS.</span><br>
  <span class='desc'>Supervised by Cheah Yu-N</span><br>
  <span class='desc'>Examiner:</span>
* **MSc (Bac5 Y2, Paris) Computer Science, SUPINFO International University** <span style="float: right;">Oct 2014 - Oct 2015</span>\
  <span class='desc'>With distinction. Final Fulltime Internship:iHealth Labs Europe.</span>
* **MSc (Bac5 Y1, Rennes) Computer Science, SUPINFO International University** <span style="float: right;">Oct 2014 - Oct 2015</span>\
  <span class='desc'>With distinction. Final part-time Internship: Vivaneo Inc. Paris</span>
* **BSc (Bac1-4, Tianjin) Computer Science, SUPINFO International University** <span style="float: right;">Aug 2010 - Jul 2014</span>\
  <span class='desc'>Final project: A farm-based web game design and develop.</span>

## Working Experience

* **Adjunct Assistant Professor**, Monash Indonesia <span style="float: right;"> Jan 2024 - Current</span>
* **Assistant Professor**, MBZUAI <span style="float: right;"> Jan 2023 - Current</span>
* **Applied Scientist**, Amazon Alexa AI <span style="float: right;"> Oct 2021 - Jan 2023</span>
* **Postdoctoral Research Associate**, University of Edinburgh <span style="float: right;"> Jun 2020 - Jul 2021</span>
* **Research Scientist**, Kata.ai  <span style="float: right;"> Nov 2019 - Sep 2021</span>
* **Engineering Intern**, Google Research <span style="float: right;"> Jul 2017 - Nov 2017</span>
* **Language Engineer**, Apple Siri  <span style="float: right;">Oct 2015 - Oct 2016</span>


## Awards

* Best Resource Paper Award, EACL 2024
* Best Resource Paper Award, AACL 2023
* Outstanding Paper Award, EACL 2023
* Outstanding Contribution Award, WNGT 2019
* World Finalists, ACM-ICPC 2014
* Silver Medalists, International Olympiad of Informatics (IOI) 2010


## Professional Activities

### Services to Scientific Communities

* **Reviewer and Program Committee Member**
  * **Conferences**: ARR, ACL, COLING, ICML, ICLR, NeurIPS, LREC
  * **Workshop**: WNGT, TL4NLP
* **Area Chair**: ACL (2023), EMNLP (2023), COLM (2024)
* **Local Chair**: COLING (2025)
* **Organizer**: South-East Asia Language Processing (SEALP) 2023, Semeval shared task organizer (2024, 2025)

<div class="page-break"></div>

## Publications

<span style="color: orange;">●</span> denotes my role as <span style="color: orange;">(Co-)senior author(s)</span>, whereas <span style="color: teal;">■</span> denotes my role as <span style="color: teal;">main author(s)</span>.
### Peer-Reviewed Conferences
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

### Peer-Reviewed Workshops
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


## Talks
  * **Training Lightweight Model via Knowledge Distillation and Parameter Efficient Finetuning**\
    Mexican NLP Summer School, Co-located with NAACL (14-15th June 2024)

Languages**\
    Google Singapore, Invited Talk (21th November 2023)  
  * **Building Multilingual & Multicultural LLMs: Methods and Challenges**\
    AI Singapore, Invited Talk (20th November 2023)

