import json

import pytest

from backend import repositorio


def test_leitores_veem_json_antigo_ate_troca_atomica(tmp_path, monkeypatch):
    caminho = tmp_path / "jogadores.json"
    caminho.write_text('{"antigo": {}}', encoding="utf-8")
    replace = repositorio.os.replace

    def conferir_e_substituir(origem, destino):
        assert json.loads(caminho.read_text()) == {"antigo": {}}
        assert json.loads(origem.read_text()) == {"novo": {"nome": "João"}}
        replace(origem, destino)

    monkeypatch.setattr(repositorio.os, "replace", conferir_e_substituir)
    repositorio._gravar(caminho, {"novo": {"nome": "João"}})
    assert json.loads(caminho.read_text()) == {"novo": {"nome": "João"}}
    assert list(tmp_path.iterdir()) == [caminho]


def test_falha_na_gravacao_preserva_dados_e_remove_temporario(tmp_path):
    caminho = tmp_path / "jogadores.json"
    caminho.write_text('{"antigo": {}}', encoding="utf-8")
    with pytest.raises(TypeError):
        repositorio._gravar(caminho, {"invalido": object()})
    assert json.loads(caminho.read_text()) == {"antigo": {}}
    assert list(tmp_path.iterdir()) == [caminho]
