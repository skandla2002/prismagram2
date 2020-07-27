// graphql에 파일들이 추가될 거임
import { makeExecutableSchema } from '@graphql-tools/schema'
import { fileLoader, mergeResolvers, mergeTypes} from 'merge-graphql-schemas';
import path from 'path';


const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, '/api/**.*.js'));

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
});

export default schema;