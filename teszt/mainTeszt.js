QUnit.module("léptetés metodus tesztelése", function () {
  QUnit.test("létezik-e a leptetes fügvény?", function (assert) {
    assert.ok(leptetes, "létezik a leptetes");
  });
  QUnit.test("létezik-e a leptetes fügvény?", function (assert) {
    assert.ok(typeof leptetes === "function", "a leptetes fügvény");
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(1, 2), 3);
  });
  QUnit.test("leptetes(1, 0)", function (assert) {
    assert.equal(leptetes(1, 0), 1);
  });
  QUnit.test("leptetes(1, hossz-1)", function (assert) {
    assert.equal(leptetes(1, lista.length - 1), 0);
  });
  QUnit.test("leptetes(-1, 2)", function (assert) {
    assert.equal(leptetes(-1, 2), 1);
  });
  QUnit.test("leptetes(-1, 0)", function (assert) {
    assert.equal(leptetes(-1, 0), lista.length - 1);
  });
  QUnit.test("leptetes(-1, hossz-1)", function (assert) {
    assert.equal(leptetes(-1, lista.length - 1), lista.length - 2);
  });
});

QUnit.module("osszeallit metódus teszteles", function () {
  QUnit.test("A kiskepMegjelenit függvény létezik-e?", function (assert) {
    assert.ok(osszeallit, "létezik a kiskepMegjelenit függvény!");
  });
  QUnit.test("A kiskepMegjelenit függvény létezik-e?", function (assert) {
    assert.ok(typeof osszeallit === "function", "a ossteallit fügvény");
  });
  QUnit.test("teljes lista", function (assert) {
    lista = [
      "kepek/alszik.jpg",
      "kepek/bocsok.jpg",
      "kepek/cirkusz.jpg",
      "kepek/eszik.jpg",
      "kepek/integet.jpg",
      "kepek/maci.jpg",
      "kepek/medve.jpg",
      "kepek/taj.jpg",
    ];
    assert.equal(
      osszeallit(lista),
      '<div><img src="kepek/alszik.jpg" alt=""></div><div><img src="kepek/bocsok.jpg" alt=""></div><div><img src="kepek/cirkusz.jpg" alt=""></div><div><img src="kepek/eszik.jpg" alt=""></div><div><img src="kepek/integet.jpg" alt=""></div><div><img src="kepek/maci.jpg" alt=""></div><div><img src="kepek/medve.jpg" alt=""></div><div><img src="kepek/taj.jpg" alt=""></div>'
    );
  });
  QUnit.test("üres lista", function (assert) {
    lista = [];
    assert.equal(osszeallit(), "");
  });
  QUnit.test("egy elemű lista", function (assert) {
    lista = ["kepek/alszik.jpg"];
    assert.equal(
      osszeallit(),
      '<div><img src="kepek/alszik.jpg" alt=""></div>'
    );
  });
});

QUnit.module("elemek megjelennek az oldalon", function () {
    let lista = [
      "kepek/alszik.jpg",
      "kepek/bocsok.jpg",
      "kepek/cirkusz.jpg",
      "kepek/eszik.jpg",
      "kepek/integet.jpg",
      "kepek/maci.jpg",
      "kepek/medve.jpg",
      "kepek/taj.jpg",
    ];
    QUnit.test("A kiskép száma megegyezik a lista elemeinek számával", function (assert) {
      assert.equal(
            document.querySelectorAll("article img").length, lista.length
        );
    });
    QUnit.test("A kiskép száma megegyezik a lista elemeinek számával", function (assert) {
        assert.equal(
              document.querySelectorAll("article img").length, lista.length
          );
      });
  });