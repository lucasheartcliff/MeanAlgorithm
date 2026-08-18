# MeanAlgorithm — Cálculo de Média Móvel Ponderada (TypeScript)

Implementação educacional do algoritmo de **média móvel ponderada exponencial** (Exponential Moving Average - EMA). Usado em análise técnica financeira, processamento de sinais e smoothing de séries temporais.

## 📚 Sobre
Algoritmo que calcula média móvel dando peso maior aos valores mais recentes:
- **Fórmula**: `EMA_t = EMA_{t-1} + α * (value_t - EMA_{t-1})`
- Onde `α = multiplier / (1 + total_variables)` e `total_variables = last_mean.multiplier + new_value.multiplier`
- Referência: [Wikipedia - EMA](https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average)

## 🛠 Tech Stack
- **Language**: TypeScript
- **Runtime**: Node.js / Browser
- **Build**: TypeScript compiler

## 🚀 Como rodar
```bash
# Instale dependências
npm install

# Compile
npx tsc

# Execute
node dist/index.js
# ou
npx ts-node src/index.ts
```

## 📁 Estrutura
```
src/
├── index.ts          # Implementação + exemplo de uso
├── styles.css        # Estilos (se houver UI)
package.json
tsconfig.json
index.html            # Demo no navegador
```

## 🔧 Algoritmo
```typescript
interface MeanParam {
  value: number;
  multiplier: number;
}

function getMeanValue(lastMean: MeanParam, newValue: MeanParam): MeanParam {
  const totalVariables = lastMean.multiplier + newValue.multiplier;
  return {
    value: lastMean.value + (newValue.value - lastMean.value) * (newValue.multiplier / totalVariables),
    multiplier: totalVariables
  };
}
```

## 📊 Exemplo
```typescript
const mean: MeanParam = { value: 18, multiplier: 1 };
const newValue: MeanParam = { value: 2, multiplier: 5 };
const result = getMeanValue(mean, newValue);
// Result: { value: ~18.33, multiplier: 6 }
```

## 📄 Licença
MIT — uso educacional livre.