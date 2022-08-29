<template><div><h1 id="documentacion" tabindex="-1"><a class="header-anchor" href="#documentacion" aria-hidden="true">#</a> Documentación</h1>
<h2 id="terminos-y-definiciones" tabindex="-1"><a class="header-anchor" href="#terminos-y-definiciones" aria-hidden="true">#</a> Términos y Definiciones</h2>
<ol>
<li><strong>AAPg:</strong> Arquitectura de Automatización de Prueba Genérica</li>
<li><strong>SAP:</strong> Sistema de Automatización de Pruebas</li>
<li><strong>SSP:</strong> Sistema Sujeto a Prueba (PAGO WEB).</li>
<li><strong>GUI:</strong> Interfaz Gráfica de Usuario</li>
<li><strong>Archivo “.feature”:</strong>  Archivo que contiene el paso a paso del escenario de prueba. La descripción del paso a paso se desarrolla haciendo el uso de la herramienta Cucumber.</li>
<li><strong>Escenario de Prueba:</strong> Para los casos de prueba del aplicativo Pago Web / Pago App / Tokenización, cada escenario de prueba dentro del feature representa a un caso de prueba.</li>
<li><strong>Aplicativo Conocido:</strong> Aplicativo el cual tiene algunos casos de prueba ya automatizados.</li>
<li><strong>Aplicativo Nuevo:</strong> Aplicativo el cual no tiene casos de prueba automatizados.</li>
</ol>
<h2 id="framework-de-automatizacion" tabindex="-1"><a class="header-anchor" href="#framework-de-automatizacion" aria-hidden="true">#</a> Framework de Automatización</h2>
<p>El framework propuesto para Niubiz se desarrolla para todo el ciclo de automatización de pruebas funcionales. Este framework contempla actualmente (5) cinco de los (7) siete componentes, dejando (2) dos para mejora continua:</p>
<p><img src="/images/documentacion/framework-tecnico.png" alt="Framework de Automatización"></p>
<h3 id="gobierno-de-ti" tabindex="-1"><a class="header-anchor" href="#gobierno-de-ti" aria-hidden="true">#</a> Gobierno de TI</h3>
<p>El framework define la participación de la automatización de pruebas en cada una de las tres capas de gobierno de TI en las organizaciones: (a) A Nivel Estratégico, (b) De Gobierno, y (c) Operativo.</p>
<ol>
<li>Nivel Estratégico. La automatización de pruebas de software es una estrategia operativa alineada a objetivos estratégicos de la gerencia de TI. El fin de este objetivo estratégico es la reducción de costos, asimismo, optimizar el modelo de calidad de software y validación de los sistemas.</li>
<li>Nivel de Gobierno.  La automatización de prueba se encuentra bajo el gobierno de una estructura de gestión propuesta por NIUBIZ.</li>
<li>Nivel Operativo. Se cuenta con una (AAP) Arquitectura de Automatización de Pruebas estándar definida.</li>
</ol>
<h3 id="roles-de-automatizacion" tabindex="-1"><a class="header-anchor" href="#roles-de-automatizacion" aria-hidden="true">#</a> Roles de Automatización</h3>
<p>El framework de automatización plantea 3 roles que se manejan de forma colaborativa:</p>
<ul>
<li>Jefe de servicio. Es el encargado de realizar el rol de facilitador así mismo de monitorear el desarrollo eficiente de los proyectos, pilotos o servicios de automatización.</li>
<li>Líder de automatización. Es el facilitador técnico y de estrategia, quien tendrá a cargo la centralización de las prácticas de automatización de soporte y de proyectos waterfall y/o ágiles, para así llevar una adecuada administración de los mismos; lo que permitirá identificar puntos de mejora continua, tanto en los procesos, así como también de impartir entrenamiento y guía a los miembros del equipo.</li>
<li>Automatizador. Encargado de realizar las actividades operativas tales como administración y soporte de la infraestructura, desarrollo, mantenimiento y ejecución de los scripts de automatización, entre otros.</li>
<li>Analista QA. Encargado de realizar las transferencias funcionales para futuros desarrollos en automatización, además de ejecutar los scripts automatizados.</li>
</ul>
<h3 id="cobertura-de-automatizacion" tabindex="-1"><a class="header-anchor" href="#cobertura-de-automatizacion" aria-hidden="true">#</a> Cobertura de Automatización</h3>
<p>El framework técnico en combinación con diferentes herramientas de automatización de pruebas, permite la cobertura de pruebas en aplicativos <strong>SERVICIOS / WEB:</strong></p>
<table>
<thead>
<tr>
<th></th>
<th>Herramientas definidas</th>
</tr>
</thead>
<tbody>
<tr>
<td>Aplicaciones Web</td>
<td>Selenium / WebDriver / JAVA</td>
</tr>
<tr>
<td>Servicios</td>
<td>Selenium / HttpClient / Java</td>
</tr>
</tbody>
</table>
<h3 id="framework-tecnico" tabindex="-1"><a class="header-anchor" href="#framework-tecnico" aria-hidden="true">#</a> Framework Técnico</h3>
<p>El proceso de pruebas de automatización se basa en el marco técnico de trabajo híbrido para los proyectos en cascada, combinando hasta cuatro patrones de automatización, según aplique en cada caso: (1) Modular, (2) Liberías comunes, (3) Datos de Pruebas, y (4) Palabras claves. El beneficio de esta configuración es que aprovecha las funcionalidades de todos los tipos de marcos asociados. Así mismo, para proyectos ágiles se integra un patrón adicional, BDD, en el cual se contemplan los (0) features (escenarios de prueba) como punto de partida.</p>
<p>Este framework permite los siguientes beneficios:</p>
<ul>
<li>Mantenimiento eficiente debido al diseño modular y librerías de funciones comunes.</li>
<li>Escalabilidad, presenta desacoplamiento, es fácil el adicionar componentes para mayor cobertura de los casos de pruebas automatizados.</li>
<li>Flexibilidad, permite ejecutar diferentes casos de pruebas a partir de diferentes datos de entrada.</li>
<li>Usabilidad, a través de palabras podemos lograr comportamientos distintos sin tener que ingresar al código.</li>
</ul>
<p>Adicionalmente, para el caso de proyectos ágiles se añadirá BDD, lo caul permite sumar a los beneficios lo siguiente:</p>
<ul>
<li>Fácil entendimiento, permite incluir en la automatización el escenario de manera escrita (lenguaje Gherkin) lo que permite que cualquier rol entienda el comportamiento que tendrá el escenario automatizado al ejecutarse.</li>
</ul>
<h3 id="capa-de-soporte-de-ti" tabindex="-1"><a class="header-anchor" href="#capa-de-soporte-de-ti" aria-hidden="true">#</a> Capa de Soporte de TI</h3>
<p>El framework plantea los siguientes servicios como soporte de TI base:</p>
<ul>
<li>Las herramientas correspondientes a la arquitectura de la automatización reciben soporte técnico y mantenimiento oportuno.</li>
<li>Gestión de pruebas automatizadas lleva un control del inventario de los casos de pruebas automatizados y el inventario de las evidencias generadas.</li>
<li>Los reporte e indicadores que son generados al finalizar las ejecuciones, permiten llevar seguimiento del desarrollo y mantenimiento de scripts.</li>
</ul>
<h3 id="administracion-de-scripts" tabindex="-1"><a class="header-anchor" href="#administracion-de-scripts" aria-hidden="true">#</a> Administración de Scripts</h3>
<p>El framework brinda soporte de administración técnico de los scripts de automatización con el Control de repositorio y Mantenimiento de scripts.</p>
<ol>
<li>
<p>Para asegurar un mantenimiento correcto, el FW Técnico debe considerar lo siguiente:</p>
<ul>
<li>Debe ser MODULAR</li>
<li>Debe ser ESCALABLE</li>
<li>Debe ser COMPRENSIBLE (Documentado)</li>
<li>Debe ser CONFIABLE</li>
<li>Debe ser VERIFICABLE</li>
</ul>
</li>
<li>
<p>Tipos de Mantenimiento:</p>
<ul>
<li>Preventivo: se realizan cambios para mejorar la operación.</li>
<li>Correctivo: cambios para corregir fallos en el Sistema de Automatización de Pruebas ante algún cambio del SSP.</li>
<li>Perfectivo: se establecen cambios para optimizar.</li>
<li>Adaptativo: se hacen cambios para admitir nuevas aplicaciones</li>
</ul>
</li>
</ol>
<p><img src="/images/documentacion/mantenimiento_script.png" alt="Mantenimiento de Script"></p>
<ol>
<li>Un mantenimiento correctivo se detecta al ejecutar un script y este falle por causas de algún cambio en el SSP.</li>
<li>Se realiza una inspección de código para detectar el módulo / clase / objeto(s) afectado(s).</li>
<li>Se prepara y envía la estimación con el esfuerzo por realizar el mantenimiento.</li>
<li>El cliente aprueba el esfuerzo y se procede con los cambios.</li>
<li>El equipo de automatización realiza los cambios hasta tener una nueva versión que ejecute sin fallos.</li>
<li>Se actualiza el código en el repositorio centralizado.</li>
<li>Se realiza una prueba para confirmar los cambios desde el repositorio central.</li>
<li>Se dispone los scripts modificados para su ejecución.</li>
</ol>
<h3 id="entrega-continua" tabindex="-1"><a class="header-anchor" href="#entrega-continua" aria-hidden="true">#</a> Entrega Continua</h3>
<p>El framework está preparado para integrarse al proceso de entrega continua que posea NIUBIZ, tanto para la Ejecución de automatizada y Regresión continua.</p>
<h2 id="gobierno-de-ti-1" tabindex="-1"><a class="header-anchor" href="#gobierno-de-ti-1" aria-hidden="true">#</a> Gobierno de TI</h2>
<p>La estrategia de automatización que plantea el gobierno de TI es la siguiente:</p>
<p><img src="/images/documentacion/gobierno1.png" alt="Gobierno TIs"></p>
<h3 id="_1-estrategia" tabindex="-1"><a class="header-anchor" href="#_1-estrategia" aria-hidden="true">#</a> 1. Estrategia</h3>
<p>Los requerimientos de automatización serán identificados por NIUBIZ (Equipo de Calidad).  Los Analistas de QA transfieren información acerca de los casos de prueba o flujos que se proponen automatizar. Esta información pasa por un análisis de factibilidad, el cual, será descrito más adelante. El análisis de factibilidad asigna una clasificación y un puntaje a los flujos o casos de prueba, permitiendo determinar los flujos óptimos a ser automatizados.<br>
Cuando se tenga los flujos ya identificados se realiza una Estimación Alto nivel, la cual permite la elaboración del Plan de Automatización.</p>
<p><img src="/images/documentacion/gobierno2.png" alt="Estrategias"></p>
<p>Cuando el plan de automatización es aprobado por NIUBIZ, se da inicio a la etapa de desarrollo.</p>
<p>Análisis de Factibilidad:
Las actividades a realizar dentro de esta etapa son las siguientes:</p>
<ol>
<li><strong>Actividad: Análisis Nivel 1</strong></li>
</ol>
<p><strong>Objetivo</strong></p>
<ul>
<li>Identificar los candidatos que sean viables funcionalmente/técnicamente.</li>
<li>Asignar un nivel de complejidad</li>
</ul>
<p><strong>Herramientas usadas</strong></p>
<ul>
<li>Matriz de Análisis Factibilidad (ANEXO10.1 – HOJA Análisis Nivel 1)</li>
<li>Reuniones con los Analistas QA asignados / personas que tengan el know-how del SSP a ser automatizado.</li>
</ul>
<ol start="2">
<li><strong>Actividad: Análisis Nivel 2</strong></li>
</ol>
<p><strong>Objetivo:</strong></p>
<ul>
<li>Asignar puntuación a los candidatos viables, en base a los siguientes criterios: Valor de Caso de Prueba, Riesgo de Negocio, Costo-Eficiencia e Historial.</li>
</ul>
<p><strong>Herramientas usadas:</strong></p>
<ul>
<li>Matriz de Análisis Factibilidad (ANEXO 10.1 – HOJA Análisis Nivel 2)</li>
<li>Reuniones con los Analistas QA asignados.
Al finalizar los análisis de Nivel 1 y Nivel 2, se procede a realizar la estimación (ANEXO: Plantilla - Matriz de Estimación Alto Nivel)</li>
</ul>
<h3 id="_2-desarrollo" tabindex="-1"><a class="header-anchor" href="#_2-desarrollo" aria-hidden="true">#</a> 2. Desarrollo</h3>
<p>Es una etapa cíclica que consiste en desarrollo y pruebas. Se realiza el desarrollo de los flujos identificadas y posteriormente se realiza las pruebas de los mismos.
Cuando los scripts ya se encuentren verificados, se realiza el despliegue en el repositorio.
Finalmente, los scripts estarán disponibles para las ejecuciones programadas o a demanda.</p>
<h3 id="_3-mantenimiento" tabindex="-1"><a class="header-anchor" href="#_3-mantenimiento" aria-hidden="true">#</a> 3. Mantenimiento</h3>
<p>Los scripts que necesiten un mantenimiento, serán identificados por NIUBIZ o por el equipo de TSOFT. Luego se hará de conocimiento al cliente para su aprobación y priorización dentro del backlog del equipo.</p>
<h3 id="_4-soporte-y-administracion" tabindex="-1"><a class="header-anchor" href="#_4-soporte-y-administracion" aria-hidden="true">#</a> 4. Soporte y Administración</h3>
<p>Durante todo el proceso de atención de automatización se cuenta con el soporte por el equipo de TSOFT.</p>
<h2 id="administracion-de-script" tabindex="-1"><a class="header-anchor" href="#administracion-de-script" aria-hidden="true">#</a> Administración de Script</h2>
<h3 id="acerca-del-repositorio" tabindex="-1"><a class="header-anchor" href="#acerca-del-repositorio" aria-hidden="true">#</a> Acerca del repositorio</h3>
<h4 id="datos-del-repositorio" tabindex="-1"><a class="header-anchor" href="#datos-del-repositorio" aria-hidden="true">#</a> Datos del repositorio</h4>
<p>Nombre Repositorio:    test-automation
Acceso al repositorio: TBD</p>
<h4 id="caracteristicas-del-repositorio" tabindex="-1"><a class="header-anchor" href="#caracteristicas-del-repositorio" aria-hidden="true">#</a> Características del repositorio</h4>
<p>Existe solo un repositorio en donde almacena un proyecto java con la estructura maven. Este proyecto incluye escenarios para los diferentes aplicativos de Niubiz.</p>
<ol>
<li>Accesos: Escritura y Lectura:  Desarrolladores de test</li>
<li>Estrategia de Ramas:</li>
</ol>
<p><img src="/images/documentacion/estrategias.png" alt="Estrategias de Ramas"></p>
<h3 id="dinamica-de-trabajo" tabindex="-1"><a class="header-anchor" href="#dinamica-de-trabajo" aria-hidden="true">#</a> Dinámica de trabajo</h3>
<p>Para el adecuado control del repositorio y el mantenimiento de los scripts, se ha propuesto la siguiente dinámica de trabajo.</p>
<ol>
<li>Al llegar un nuevo proyecto, solicitud a demanda de automatización de prueba de un aplicativo o mantenimiento de scripts, se deberá crear una rama con el nombre del proyecto o aplicativo.</li>
<li>Los automatizadores descargan la versión del master a su local.</li>
<li>Los automatizadores desarrollan los nuevos scripts en la nueva rama. Realizan las pruebas correspondientes y realizan un push dentro de la nueva rama.</li>
<li>Los automatizadores realizan un pull request de la nueva rama a la rama master.</li>
<li>Se realiza una revisión de pares al código que se quiere subir al master.</li>
<li>Se aprueba el pull request y la rama master tiene la versión actualizada.</li>
<li>Al finalizar el desarrollo de los nuevos scripts, se elimina la rama creada.</li>
</ol>
<p><img src="/images/documentacion/dinamica_trabajo.png" alt="Dinamica de Trabajo"></p>
</div></template>
