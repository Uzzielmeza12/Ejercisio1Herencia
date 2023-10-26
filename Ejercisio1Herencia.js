class Mensaje {
    constructor(contenido) {
      this.contenido = contenido;
    }
  
    enviar() {
      console.log(this.contenido);
    }
  }
  
  class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  }
  
  class Notificador {
    constructor() {
      this.personas = [];
    }
  
    agregarPersona(nombre, edad, profesion) {
      const persona = new Persona(nombre, edad, profesion);
      this.personas.push(persona);
    }
  
    enviarMensaje(persona, mensaje) {
      console.log(`Enviando un mensaje a ${persona.nombre} (${persona.profesion}), que tiene ${persona.edad} años:`);
      mensaje.enviar();
    }
  
    enviarMensajesATodas(mensaje) {
      this.personas.forEach((persona) => {
        this.enviarMensaje(persona, mensaje);
      });
    }
  }
  
//-------------------------------------------------------------------------------------

  const notificador = new Notificador();
  
  notificador.agregarPersona("Mario", 55, "Ingeniero");
  notificador.agregarPersona("Mercedez", 25, "Doctora");
  notificador.agregarPersona("Omar", 26, "Profesor");
  
  const mensaje = new Mensaje("Hola, este es un aviso.");
  
  notificador.enviarMensajesATodas(mensaje);
  

//------------------------------------------------------------------------------------------

//Crear al menos 3 clases hijas de "Mensaje" que sean diferentes medios de comunicación (email, mensaje de texto, sms, WA, etc.) y que sobreescriban el método enviar para mandar mensajes.

  
  class Email extends Mensaje {
    constructor(contenido, destinatario, asunto) {
      super(contenido);
      this.destinatario = destinatario;
      this.asunto = asunto;
    }
  
    enviar() {
      console.log("Correo a: " + this.destinatario);
      console.log("Asunto: " + this.asunto);
      super.enviar();
    }
  }
  
  class MensajeTexto extends Mensaje {
    constructor(contenido, numeroDestino) {
      super(contenido);
      this.numeroDestino = numeroDestino;
    }
  
    enviar() {
      console.log("Mensaje de texto a: " + this.numeroDestino);
      super.enviar();
    }
  }
  
  class WhatsApp extends Mensaje {
    constructor(contenido, contacto) {
      super(contenido);
      this.contacto = contacto;
    }
  
    enviar() {
      console.log("WhatsApp a: " + this.contacto);
      super.enviar();
    }
  }
  
  const email = new Email("Hola, ¿cómo estás?", "Chuy2034@hotmail.com", "Saludos");
  const mensajeTexto = new MensajeTexto("¡Hola desde el mensaje de texto!", "6731301092");
  const whatsappMensaje = new WhatsApp("¡Hola desde WhatsApp!", "ContactoAmigo");
  
  email.enviar();
  mensajeTexto.enviar();
  whatsappMensaje.enviar();
  