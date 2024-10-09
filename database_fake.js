import { randomUUID } from "crypto"

export class DatabaseMock {
    #alunos = new Map()

    //simula um select no banco
    list() {
        return Array.from(this.#alunos.entries())
    }

    //simula um insert no banco
    create(aluno){
        const alunoId = randomUUID()
        this.#alunos.set(alunoId, aluno)
    }

    update(alunoId, aluno) {
        this.#alunos.set(alunoId, aluno)
    }

    delete(alunoId) {
        this.#alunos.delete(alunoId)
    }
    
}