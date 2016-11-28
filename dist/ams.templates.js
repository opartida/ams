(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('srcscripts/ams/ams.tpl.html',
    '<!DOCTYPE html><ams-header></ams-header><div class=container><div class="row row-offcanvas row-offcanvas-right"><div class="col-xs-12 col-sm-12"><p class="pull-right visible-xs"><button type=button class="btn btn-primary btn-xs" data-toggle=offcanvas>Toggle nav</button></p><div ui-view=content></div></div></div><hr><footer><p>&copy; 2016 Company, Inc.</p></footer></div><script>$(\'#carouselHacked\').carousel();</script>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('srcscripts/amsConsulta/amsConsulta.tpl.html',
    '<!DOCTYPE html><form class="well form-horizontal" action="" method=post id=contact_form><fieldset><legend>Consulta</legend><div class=form-group><label class="col-md-4 control-label">Nombre</label><div class="col-md-4 inputGroupContainer"><div class=input-group><span class=input-group-addon><i class="glyphicon glyphicon-user"></i></span> <input name=first_name placeholder=Nombre class=form-control type=text></div></div></div><div class=form-group><label class="col-md-4 control-label">Apellidos</label><div class="col-md-4 inputGroupContainer"><div class=input-group><span class=input-group-addon><i class="glyphicon glyphicon-user"></i></span> <input name=apellidos placeholder=Apellidos class=form-control type=text></div></div></div><div class=form-group><label class="col-md-4 control-label">E-Mail</label><div class="col-md-4 inputGroupContainer"><div class=input-group><span class=input-group-addon><i class="glyphicon glyphicon-envelope"></i></span> <input name=email placeholder="correo electrónico" class=form-control type=text></div></div></div><div class=form-group><label class="col-md-4 control-label">Teléfono</label><div class="col-md-4 inputGroupContainer"><div class=input-group><span class=input-group-addon><i class="glyphicon glyphicon-earphone"></i></span> <input name=telefono class=form-control type=text></div></div></div><div class=form-group><label class="col-md-4 control-label">Ciudad</label><div class="col-md-4 inputGroupContainer"><div class=input-group><span class=input-group-addon><i class="glyphicon glyphicon-home"></i></span> <input name=ciudad placeholder=Ciudad class=form-control type=text></div></div></div><div class=form-group><label class="col-md-4 control-label">Consulta</label><div class="col-md-4 inputGroupContainer"><div class=input-group><span class=input-group-addon><i class="glyphicon glyphicon-pencil"></i></span><textarea class=form-control name=consulta placeholder=Consulta></textarea></div></div></div><div class="alert alert-success" role=alert id=success_message>Success <i class="glyphicon glyphicon-thumbs-up"></i> Gracias por la consulta, le contestaremos.</div><div class=form-group><label class="col-md-4 control-label"></label><div class=col-md-4><button type=submit class="btn btn-warning">Send <span class="glyphicon glyphicon-send"></span></button></div></div></fieldset></form>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('srcscripts/amsMain/amsMain.tpl.html',
    '<!DOCTYPE html><div class=row><div class="col-sm-6 col-md-4"><div class=thumbnail><img src=... alt=...><div class=caption><h3>Hombres</h3><p>...</p><div class="btn btn-primary" role=button ng-click="amsMainCtrl.handleClickPacientes(\'hombres\')">Más</div></div></div></div><div class="col-sm-6 col-md-4"><div class=thumbnail><img src=... alt=...><div class=caption><h3>Mujeres</h3><p>...</p><div class="btn btn-primary" role=button ng-click="amsMainCtrl.handleClickPacientes(\'mujeres\')">Más</div></div></div></div><div class="col-sm-6 col-md-4"><div class=thumbnail><img src=... alt=...><div class=caption><h3>Niños</h3><p>...</p><div class="btn btn-primary" role=button ng-click="amsMainCtrl.handleClickPacientes(\'ninos\')">Más</div></div></div></div><div class="col-xs-6 col-lg-4"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p><p><a class="btn btn-default" href=# role=button>View details &raquo;</a></p></div><div class="col-xs-6 col-lg-4"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p><p><a class="btn btn-default" href=# role=button>View details &raquo;</a></p></div><div class="col-xs-6 col-lg-4"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p><p><a class="btn btn-default" href=# role=button>View details &raquo;</a></p></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('srcscripts/amsPacientes/amsPacientes.tpl.html',
    '<!DOCTYPE html><div ng-if="amsPacientesCtrl.checkTipoPaciente(\'hombres\')"><ul class="nav nav-tabs"><li class=active><a href=#urologia data-toggle=tab>Urología</a></li><li><a href=#proctologia data-toggle=tab>Proctología</a></li></ul><div class=tab-content><div class="tab-pane active" id=urologia><h3>Standard tab panel created on bootstrap using nav-tabs</h3></div><div class=tab-pane id=proctologia><h3>Notice the gap between the content and tab after applying a background color</h3></div></div></div><div ng-if="amsPacientesCtrl.checkTipoPaciente(\'mujeres\')"><ul class="nav nav-tabs"><li class=active><a href=#ginecologia data-toggle=tab>Ginecología</a></li><li><a href=#urologia data-toggle=tab>Urología</a></li><li><a href=#proctologia data-toggle=tab>Proctología</a></li></ul><div class=tab-content><div class="tab-pane active" id=ginecologia><h3>Standard tab panel created on bootstrap using nav-tabs</h3></div><div class=tab-pane id=urologia><h3>Notice the gap between the content and tab after applying a background color</h3></div><div class=tab-pane id=proctologia><h3>Notice the gap between the content and tab after applying a background color</h3></div></div></div><div ng-if="amsPacientesCtrl.checkTipoPaciente(\'ninos\')"><ul class="nav nav-tabs"><li class=active><a href=#>Home</a></li></ul></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('srcscripts/amsTratamientos/amsTratamientos.tpl.html',
    '<div class=panel-group id=accordion><div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle data-toggle=collapse data-parent=#accordion href=#collapseOne>Técnicas osteopáticas</a></h4></div><div id=collapseOne class="panel-collapse collapse in"><div class=panel-body>Las técnicas osteopáticas se encargan de devolver el movimiento normal, y por lo tanto la función, a las estructuras miofasciales, articulares, viscerales, neurológicas, etc. que lo han perdido, pudiendo provocar una pérdida de su capacidad funcional total o parcial. Esta falta de movimiento normal genera una cascada de signos y síntomas como la inflamación, el dolor, reducción del trofismo, inmunodepresión, desequilibrio del sistema neurovegetativo, etc. que pueden ser el origen de los problemas de los pacientes: dolor, incapacidad funcional, etc. Existen técnicas osteopáticas específicas de la zona urogenital que pueden mejorar y eliminar procesos agudos y crónicos diferentes: síndromes dolorosos, infecciones urinarias crónicas, disfunciones de suelo pélvico, etc.</div></div></div><div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle data-toggle=collapse data-parent=#accordion href=#collapseTwo>Ultrasonidos / Diatermia-Radiofrecuencia</a></h4></div><div id=collapseTwo class="panel-collapse collapse"><div class=panel-body>Los ultrasonidos terapeúticos y/o la diatermia -radiofrecuencia, son técnicas muy empleadas en procesos dolorosos, inflamatorios, etc. Nos permite fundamentalmente aumentar la temperatura en tejidos profundos y con esto aumentar su metabolismo y su capacidad de regeneración a la vez que reducir el dolor y la inflamación. También son utilizados en procesos fibróticos, adherencias, etc por su capacidad desfibrosante. Por lo tanto cualquier cicatriz (episiotomías, etc.) o enfermedades muy específicas (enfermedad Peyronie) pueden ser tratadas con estas técnicas como complemento a otras intervenciones terapéuticas..</div></div></div><div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle data-toggle=collapse data-parent=#accordion href=#collapseThree>Técnicas Miofasciales / Neuromusculares</a></h4></div><div id=collapseThree class="panel-collapse collapse"><div class=panel-body>Las técnicas manuales dirigidas sobre la estructuras miofasciales ejercen un potente efecto sobre estas estrucutras a nivel local y también sobre las estructuras neuromusculares con un efecto a nivel del sistema nervioso lo que permite influir en el control ó eliminación de los procesos dolorosos de diferente origen: miofascial, neuromuscular, visceral, etc. Así a través de los reflejos músculo-víscero-cutáneos, reflejos somato-simpáticos, etc. podemos tratar síndromes como el dolor pélvico crónico (prostatitis, cistitis intersticial, atrapamiento nervio pudendo, vulvovestibulitis), u otros, una vez se han descartado por el médico especialista otras causas de este dolor.</div></div></div><div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle data-toggle=collapse data-parent=#accordion href=#collapseFour>Biofeedback Electromiográfico</a></h4></div><div id=collapseFour class="panel-collapse collapse"><div class=panel-body>El biofeedback es una técnica que se utiliza de forma habitual en diferentes tratamientos en el campo de la urogineproctología y obstetricia. A través de un sofisticado equipo se registra una función biológica del organismo y se le muestra al paciente en forma de gráfico. En este caso nos permite mostrar la señal de la actividad electromiográfica que presentan los músculos (por ejemplo, los músculos del suelo pélvico) y con esto conseguimos en el paciente un más rápido y mejor control de los mismos bien para su tonificación, para una mejor integración de los mismos en nuestro esquema corporal, una normalización de hipertonías musculares que pueden provocar dolor, una correcta coordinación de estos músculos con otros músculos y vísceras en algunas funciones como la continencia o la micción, y para conseguir un mayor control de los mismos en situaciones como las relaciones sexuales donde pueden contraerse de manera involuntaria y provocar disfunciones como el vaginismo, dispareunia, etc. Además esta tecnología permite realizar algunas valoraciones de gran valor para el diagnóstico y planificación del tratamiento en cada paciente.</div></div></div><div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle data-toggle=collapse data-parent=#accordion href=#collapseFive>Neuromodulación Periferica / Nervio Tibial Posterior</a></h4></div><div id=collapseFive class="panel-collapse collapse"><div class=panel-body>Se trata de técnicas que bien mediante aplicación percutánea o transcutánea y con aparatos de electroterapia específicos, nos permiten estimular vías nerviosas y conseguir así provocar en el organismo reacciones fisiológicas con el objetivo de conseguir: neuromodulación del dolor, control vesical, estimulación de reflejos, control ano-rectal, etc. En los últimos años la estimulación del nervio tibial posterior ha sido estudiada y utilizada con muy buenos resultados en diferentes patologías como la vejiga hiperactiva, encopresis, dolor pélvico crónico, hipotonía vesical, incontinencia fecal, etc.</div></div></div><div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle data-toggle=collapse data-parent=#accordion href=#collapseSix>Gimnasia Abdominal Hipopresiva</a></h4></div><div id=collapseSix class="panel-collapse collapse"><div class=panel-body>Técnica creada por el Dr. Marcel Caufriez, indicada inicialmente en la recuperación postparto del sistema musculoesquelético que conforman: pared abdominal, diafragma torácico y músculos del suelo pélvico, dada la vital importancia de estas estructuras en la función de continencia y sostén de las vísceras de la pelvis menor en la mujer. Permite además la recuperación de la figura de la mujer pérdida tras el embarazo y el parto sin peligro de realizar trabajos como las abdominales convencionales que pueden empeorar y agravar los problemas urogenitales. También es una técnica de elección en mujeres con problemas de incontinencia urinaria y/ó problemas de estática pelviana (cistocele, etc.), sensación de pesadez o bulto enla zona vaginal, etc. con muy buenos resultados.</div></div></div><div class="panel panel-default"><div class=panel-heading><h4 class=panel-title><a class=accordion-toggle data-toggle=collapse data-parent=#accordion href=#collapseSeven>Electroestimulación Muscular</a></h4></div><div id=collapseSeven class="panel-collapse collapse"><div class=panel-body><p><strong>La electroestimulación&nbsp;es una técnica de fisioterapia que consiste en aplicar&nbsp;una corriente electrica, a unas frecuencias e intensidades específicas, a través de los distintos músculos que conforman el&nbsp;suelo pélvico.</strong></p><p>Se realiza mediante unos equipos de electroestimulación muscular adaptados específicamente para los tratamientos de fisioterapia en&nbsp;la rehabilitación de los músculos del suelo pélvico. Utilizada&nbsp;tanto en patologías de <a href=http://www.fisioterapiasuelopelvico.com/pacientes/mujeres>mujer</a> como en <a href=http://www.fisioterapiasuelopelvico.com/pacientes/hombres>hombre</a>, la electroestimulación nos permite mejorar el tono, la fuerza y la velocidad de contracción de la musculatura, siendo posible&nbsp;modificar&nbsp;los parámetros de la corriente para potenciar los distintos&nbsp;tipos de fibras musculares que nos interesen en cada momento.</p><div class="resumenTexto right"><b>La electroestimulación ayuda a potenciar la fuerza, el tono y la velocidad de contracción de la musculatura del suelo pélvico.</b></div><p>La electroestimulación muscular constituye una herramienta muy eficaz en la rehabilitación de los músculos del suelo pélvico ya sea como tratamiento complementario al trabajo que realiza el paciente mediante ejercicios, o como tratamiento único en aquellos casos donde el paciente, por diferentes motivos, no puede generar contracciones de manera voluntaria en sus estructuras musculares. También resulta especialmente últil su aplicación en pacientes que no saben como utilizar estas estructuras, algo muy habitual en los músculos del suelo pélvico, permitiendo mejorar la propiocepción y el control de los músculos.</p><p>Algunas disfunciones donde solemos aplicar esta técnica son la <a href=http://www.fisioterapiasuelopelvico.com/pacientes/mujeres/incontinencia-urinaria>Incontinencia urinaria postparto</a>,&nbsp;<a href=http://www.fisioterapiasuelopelvico.com/pacientes/hombres/incontinencia-urinaria>incontinencia urinaria tras prostatectomía radical</a>, la<a href=http://www.fisioterapiasuelopelvico.com/pacientes/mujeres/incontinencia-heces-gases> incontinecia de heces</a>, o la&nbsp;<a href=http://www.fisioterapiasuelopelvico.com/pacientes/hombres/disfuncion-erectil>disfunción eréctil</a>. (<a href=http://www.ncbi.nlm.nih.gov/pubmed/20850831>Randomized, placebo controlled study of electrical stimulation with pelvic floor muscle training for severe urinary incontinence after radical prostatectomy</a>)</p></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('srcscripts/header/amsHeader.tpl.html',
    '<nav class="navbar navbar-fixed-top navbar-inverse"><div class=container><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=http://disputebills.com><img src=http://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png alt="Dispute Bills"></a></div><div id=navbar class="collapse navbar-collapse"><ul class="nav navbar-nav"><li class=active><a ui-sref=app.home>Home</a></li><li><a>Quienes somos</a></li><li><a>Cursos</a></li><li><a ui-sref=app.tratamientos>Tratamientos</a></li><li><a ui-sref=app.consulta>Consulta</a></li><li><a>Contacto</a></li></ul></div></div></nav>');
}]);
})();
