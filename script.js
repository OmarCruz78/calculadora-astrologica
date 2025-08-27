    // Reducir número a un solo dígito
    function reducirUnDigito(numero) {
      while (numero > 9) {
        numero = numero.toString().split("").reduce((acc, dig) => acc + parseInt(dig), 0);
      }
      return numero;
    }

    // Interpretaciones con íconos
    const interpretaciones = {
      1: { icono: "☀️", texto: "Número 1 → Liderazgo, independencia y fuerza de voluntad. Representa el inicio de un camino propio." },
      2: { icono: "🌙", texto: "Número 2 → Cooperación, sensibilidad y equilibrio. Representa la armonía y las relaciones." },
      3: { icono: "🌟", texto: "Número 3 → Creatividad, comunicación y alegría. Es la energía de la expresión y la inspiración." },
      4: { icono: "🏔️", texto: "Número 4 → Estabilidad, disciplina y orden. Representa bases sólidas y constancia." },
      5: { icono: "🔥", texto: "Número 5 → Libertad, aventura y cambio. Energía dinámica que impulsa nuevas experiencias." },
      6: { icono: "💚", texto: "Número 6 → Amor, responsabilidad y familia. Representa el servicio y la armonía en el hogar." },
      7: { icono: "🔮", texto: "Número 7 → Sabiduría, introspección y espiritualidad. Es búsqueda de conocimiento profundo." },
      8: { icono: "💎", texto: "Número 8 → Poder, éxito material y autoridad. Representa logros y ambición constructiva." },
      9: { icono: "🌍", texto: "Número 9 → Humanitarismo, compasión y cierre de ciclos. Representa altruismo y transformación." }
    };

    // Calcular número astrológico
    function calcularNumero() {
      let dia = document.getElementById("dia").value;
      let mes = document.getElementById("mes").value;
      let anio = document.getElementById("anio").value;

      if (dia === "" || mes === "" || anio === "") {
        document.getElementById("resultado").innerText = "⚠️ Completa todos los campos.";
        document.getElementById("interpretacion").innerText = "";
        document.getElementById("icono").innerText = "";
        return;
      }

      let fechaStr = dia + mes + anio;
      let suma = fechaStr.split("").reduce((acc, dig) => acc + parseInt(dig), 0);
      let numeroFinal = reducirUnDigito(suma);

      document.getElementById("resultado").innerText = "✨ Tu número astrológico es: " + numeroFinal;
      document.getElementById("icono").innerText = interpretaciones[numeroFinal].icono;
      document.getElementById("interpretacion").innerText = interpretaciones[numeroFinal].texto;
    }
