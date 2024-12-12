---
layout: page
title: Journey
description: Lifestyle Mobile App to Alleviate Depressive Symptoms Using Cognitive and Behavioral Strategies in mHealth
importance: 2
category: design
related_publications: false
---

<!-- img: assets/img/depression_background.png -->


### Problem Space

Adjusting an individual's lifestyle is widely recognized as a key factor in preventing the onset of mental health disorders such as depression and anxiety. Additionally, lifestyle modifications are often effective in alleviating symptoms of existing mental health conditions, including depression. With the growing potential of mHealth (mobile health) as a tool for both diagnosis and treatment, we aimed to develop a lifestyle-focused mobile application that integrates cognitive and behavioral strategies to help reduce depressive symptoms in individuals facing mental health challenges.

    Role: UX Researcher, UI Developer, CHISEL

<div><br></div>

### Finding the Gap
Despite the rise of mHealth applications targeting mental health disorders, the dropout rate remains alarmingly high, with approximately 77% of users abandoning apps within the first three days post-installation. To address this challenge, our first step was an extensive preliminary research phase to identify gaps in existing solutions.

This research followed three key approaches:
<ul>
    <li>We tested over 100 depression-focused mobile apps available on the Play Store and Apple Store, covering areas like depression monitoring, awareness, and behavioral interventions.</li>
    <li>We conducted a systematic review (>1000 papers) of the design and effectiveness of behavior change applications.</li>
    <li>We explored various behavior change and psychotherapy models and frameworks to understand their mechanisms and potential integration.
    </li>
</ul>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/depression_app_board.png" title="Depression App (Whiteboard Activity)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   (Left) Whiteboard divided into quadrants, with axes labeled "Behavioral Therapy" (vertical) and "Cognitive Therapy" (horizontal), as well as "Effort." Post-it notes are categorized into the quadrants, suggesting strategies or tools like "Exercise," "Mood Journal," or "Breathing". (Top-right) A wall with color-coded sticky notes, arranged into groups for a different level of categorization or clustering. 
   (Bottom-right) A digital quadrant system, with axes labeled "General-Specific" and "Behavior-Cognition." Sticky notes are digitally positioned to align with similar categories.
</div>

<div><br></div>

### Feature Design

While adopting positive behaviors in daily life can significantly reduce depressive symptoms, the real challenge lies in initiating and sustaining these behaviors naturalistically over time.

Behavioral actions are often driven by internal or external triggers—be it a person, an object, or a situational cue encountered during the day. Now, imagine having such a trigger consistently within reach, right in your pocket. This concept became the foundation of our approach.

Using the accessibility of mobile phones, we designed an application that delivers personalized, persuasive prompts. These prompts act as triggers, encouraging users to adopt and maintain healthier behaviors seamlessly in their everyday routines.

<div><br></div>

<!--You can also put regular text between your rows of images, even citations {% cite iftikhar2023together %}.-->

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
    <h4> Persuasive Prompts </h4>
    Persuasive prompts are messages that try to persuade the user to perform particular tasks or try to embed an idea into the user’s mind. At this stage of the project, our primary focus was on the concept of the prompts. We created different variations using different messaging techniques and behavior change models and mapped them on to 10 different behaviors which, research shows, can help reduce depressive symptoms.

     <div class="caption">
           Sample Prompts: (Left) Action-based prompt encouraging the user to incorporate exercise into their daily routine. (Right) Skill-based prompt guiding the user to adopt concentration techniques when struggling to focus.
    </div>

    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/persuasive_prompts.png" title="persuasive_prompts" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
        These prompts aim to deliver actionable, personalized nudges that align with evidence-based strategies for mental well-being.
        </div>
    </div>
</div>

#### Concept Testing
Keeping the user at the heart of the ideation process was important to understanding the perspectives of our target audience. To achieve this, we focused heavily on the content and developed low-fidelity prototypes of the prompts using JustInMind (as shown above).

These prototypes were then tested in a concept acceptability study, allowing us to introduce users to the idea and evaluate its feasibility, appeal, and potential for success.

<hr>

### Designing Journey
Journey uses persuasive prompts to persuade users to adopt behaviors scientifically proven to improve mental health. During the design process, our focus was on creating a system that not only initiates engagement with healthy behaviors but also supports users in sustaining them.

For this reason, we chose the Transtheoretical Model of Behavior Change (TTM) as a framework for our design. TTM outlines five stages of behavior change: precontemplation, contemplation, preparation, action, and maintenance. Our persuasive prompts are carefully crafted to guide users through these stages, facilitating gradual and lasting behavior transformation.

#### User Journey
We mapped out the user journey within Journey, detailing the steps a user would take while interacting with the application. Drawing from our extensive research on behavior change and psychotherapy, we identified key variables—such as motivation and self-efficacy—that influence a person’s decision to take action. These insights shaped the design and functionality of the app, ensuring it effectively supports users in adopting and maintaining healthier behaviors.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/user_journey_depression.png" title="Depression App (Whiteboard Activity)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   User journey map illustrating behavior change through motivational strategies and cognitive-behavioral therapy in the Journey.
</div>


#### Modules

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        Journey consists of three modules: The <strong>Journey Module</strong> offers premade paths focused on behaviors to reduce depressive symptoms, such as the ‘Physical Health’ journey, which promotes exercise, healthy eating, and sleep. The <strong>Behavior Module</strong> breaks these journeys into individual behaviors, allowing users to focus on them based on personal needs. The <strong>Goal Module </strong>divides each behavior into small, achievable goals, progressing users through the stages of the Transtheoretical Model of Behavior Change.
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        <div class="row">
            <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="assets/img/depression_modules.png" title="Depression App (Whiteboard Activity)" class="img-fluid rounded z-depth-1" %}
            </div>
        </div>
    </div>
</div>

<div><br></div>

#### Wireframes
The next step was to develop wireframes, which was done through simple sketching using pencil and paper.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/depression_wireframes.png" title="Depression App (Whiteboard Activity)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>


### Prototype
We then created a high-fidelity prototype using Figma. The goal of the prototype was to support the development phase while also testing the application's usability.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/depression_prototype.png" title="Depression App (Whiteboard Activity)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>

<div><br></div>