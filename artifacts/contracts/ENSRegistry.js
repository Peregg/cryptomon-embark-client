import EmbarkJS from '../embarkjs';

const ENSRegistryConfig = {"abiDefinition":[{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0178b8bf"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x02571be3"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"label","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x06ab5923"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x14ab9038"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x16a25cbd"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x1896f70a"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x5b0fc9c3"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"NewOwner","type":"event","signature":"0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"}],"name":"Transfer","type":"event","signature":"0xd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d266"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"resolver","type":"address"}],"name":"NewResolver","type":"event","signature":"0x335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event","signature":"0x1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68"}],"deployedAddress":"0x04D45b51fe4f00b4478F8b0719Fa779f14c8A194","className":"ENSRegistry","args":[],"gas":"auto","silent":true,"track":true,"deploy":true,"realRuntimeBytecode":"6080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630178b8bf811461008757806302571be3146100bb57806306ab5923146100d357806314ab9038146100fc57806316a25cbd146101215780631896f70a146101565780635b0fc9c31461017a575b600080fd5b34801561009357600080fd5b5061009f60043561019e565b60408051600160a060020a039092168252519081900360200190f35b3480156100c757600080fd5b5061009f6004356101bc565b3480156100df57600080fd5b506100fa600435602435600160a060020a03604435166101d7565b005b34801561010857600080fd5b506100fa60043567ffffffffffffffff6024351661033c565b34801561012d57600080fd5b5061013960043561044d565b6040805167ffffffffffffffff9092168252519081900360200190f35b34801561016257600080fd5b506100fa600435600160a060020a0360243516610484565b34801561018657600080fd5b506100fa600435600160a060020a036024351661056f565b600090815260208190526040902060010154600160a060020a031690565b600090815260208190526040902054600160a060020a031690565b60008381526020819052604081205484908390600160a060020a031615806102155750600082815260208190526040902054600160a060020a031633145b806102395750600082815260208190526040902054600160a060020a038281169116145b151561024457600080fd5b604080516020808201899052818301889052825180830384018152606090920192839052815191929182918401908083835b602083106102955780518252601f199092019160209182019101610276565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600160a060020a038b16835293519398508a95508b94507fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e829391829003019150a350506000908152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555050565b600082815260208190526040812054839190600160a060020a031615806103795750600082815260208190526040902054600160a060020a031633145b8061039d5750600082815260208190526040902054600160a060020a038281169116145b15156103a857600080fd5b6040805167ffffffffffffffff85168152905185917f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68919081900360200190a25050600091825260208290526040909120600101805467ffffffffffffffff90921674010000000000000000000000000000000000000000027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60009081526020819052604090206001015474010000000000000000000000000000000000000000900467ffffffffffffffff1690565b600082815260208190526040812054839190600160a060020a031615806104c15750600082815260208190526040902054600160a060020a031633145b806104e55750600082815260208190526040902054600160a060020a038281169116145b15156104f057600080fd5b60408051600160a060020a0385168152905185917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0919081900360200190a25050600091825260208290526040909120600101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055565b60008281526020819052604090205482908290600160a060020a031615806105ad5750600082815260208190526040902054600160a060020a031633145b806105d15750600082815260208190526040902054600160a060020a038281169116145b15156105dc57600080fd5b60408051600160a060020a0385168152905185917fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d266919081900360200190a25050600091825260208290526040909120805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555600a165627a7a72305820","realArgs":[],"code":"608060405234801561001057600080fd5b5060008080526020527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb58054600160a060020a03191633179055610684806100596000396000f3006080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630178b8bf811461008757806302571be3146100bb57806306ab5923146100d357806314ab9038146100fc57806316a25cbd146101215780631896f70a146101565780635b0fc9c31461017a575b600080fd5b34801561009357600080fd5b5061009f60043561019e565b60408051600160a060020a039092168252519081900360200190f35b3480156100c757600080fd5b5061009f6004356101bc565b3480156100df57600080fd5b506100fa600435602435600160a060020a03604435166101d7565b005b34801561010857600080fd5b506100fa60043567ffffffffffffffff6024351661033c565b34801561012d57600080fd5b5061013960043561044d565b6040805167ffffffffffffffff9092168252519081900360200190f35b34801561016257600080fd5b506100fa600435600160a060020a0360243516610484565b34801561018657600080fd5b506100fa600435600160a060020a036024351661056f565b600090815260208190526040902060010154600160a060020a031690565b600090815260208190526040902054600160a060020a031690565b60008381526020819052604081205484908390600160a060020a031615806102155750600082815260208190526040902054600160a060020a031633145b806102395750600082815260208190526040902054600160a060020a038281169116145b151561024457600080fd5b604080516020808201899052818301889052825180830384018152606090920192839052815191929182918401908083835b602083106102955780518252601f199092019160209182019101610276565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600160a060020a038b16835293519398508a95508b94507fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e829391829003019150a350506000908152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555050565b600082815260208190526040812054839190600160a060020a031615806103795750600082815260208190526040902054600160a060020a031633145b8061039d5750600082815260208190526040902054600160a060020a038281169116145b15156103a857600080fd5b6040805167ffffffffffffffff85168152905185917f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68919081900360200190a25050600091825260208290526040909120600101805467ffffffffffffffff90921674010000000000000000000000000000000000000000027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60009081526020819052604090206001015474010000000000000000000000000000000000000000900467ffffffffffffffff1690565b600082815260208190526040812054839190600160a060020a031615806104c15750600082815260208190526040902054600160a060020a031633145b806104e55750600082815260208190526040902054600160a060020a038281169116145b15156104f057600080fd5b60408051600160a060020a0385168152905185917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0919081900360200190a25050600091825260208290526040909120600101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055565b60008281526020819052604090205482908290600160a060020a031615806105ad5750600082815260208190526040902054600160a060020a031633145b806105d15750600082815260208190526040902054600160a060020a038281169116145b15156105dc57600080fd5b60408051600160a060020a0385168152905185917fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d266919081900360200190a25050600091825260208290526040909120805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555600a165627a7a72305820ab29585bdb630f86714bdc052e84731ce84785d7ace426bc24c1104e8760968c0029","runtimeBytecode":"6080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630178b8bf811461008757806302571be3146100bb57806306ab5923146100d357806314ab9038146100fc57806316a25cbd146101215780631896f70a146101565780635b0fc9c31461017a575b600080fd5b34801561009357600080fd5b5061009f60043561019e565b60408051600160a060020a039092168252519081900360200190f35b3480156100c757600080fd5b5061009f6004356101bc565b3480156100df57600080fd5b506100fa600435602435600160a060020a03604435166101d7565b005b34801561010857600080fd5b506100fa60043567ffffffffffffffff6024351661033c565b34801561012d57600080fd5b5061013960043561044d565b6040805167ffffffffffffffff9092168252519081900360200190f35b34801561016257600080fd5b506100fa600435600160a060020a0360243516610484565b34801561018657600080fd5b506100fa600435600160a060020a036024351661056f565b600090815260208190526040902060010154600160a060020a031690565b600090815260208190526040902054600160a060020a031690565b60008381526020819052604081205484908390600160a060020a031615806102155750600082815260208190526040902054600160a060020a031633145b806102395750600082815260208190526040902054600160a060020a038281169116145b151561024457600080fd5b604080516020808201899052818301889052825180830384018152606090920192839052815191929182918401908083835b602083106102955780518252601f199092019160209182019101610276565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600160a060020a038b16835293519398508a95508b94507fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e829391829003019150a350506000908152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555050565b600082815260208190526040812054839190600160a060020a031615806103795750600082815260208190526040902054600160a060020a031633145b8061039d5750600082815260208190526040902054600160a060020a038281169116145b15156103a857600080fd5b6040805167ffffffffffffffff85168152905185917f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68919081900360200190a25050600091825260208290526040909120600101805467ffffffffffffffff90921674010000000000000000000000000000000000000000027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60009081526020819052604090206001015474010000000000000000000000000000000000000000900467ffffffffffffffff1690565b600082815260208190526040812054839190600160a060020a031615806104c15750600082815260208190526040902054600160a060020a031633145b806104e55750600082815260208190526040902054600160a060020a038281169116145b15156104f057600080fd5b60408051600160a060020a0385168152905185917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0919081900360200190a25050600091825260208290526040909120600101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055565b60008281526020819052604090205482908290600160a060020a031615806105ad5750600082815260208190526040902054600160a060020a031633145b806105d15750600082815260208190526040902054600160a060020a038281169116145b15156105dc57600080fd5b60408051600160a060020a0385168152905185917fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d266919081900360200190a25050600091825260208290526040909120805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555600a165627a7a72305820ab29585bdb630f86714bdc052e84731ce84785d7ace426bc24c1104e8760968c0029","swarmHash":"ab29585bdb630f86714bdc052e84731ce84785d7ace426bc24c1104e8760968c","gasEstimates":{"creation":{"codeDepositCost":"333600","executionCost":"20684","totalCost":"354284"},"external":{"owner(bytes32)":"634","resolver(bytes32)":"618","setOwner(bytes32,address)":"23389","setResolver(bytes32,address)":"23370","setSubnodeOwner(bytes32,bytes32,address)":"infinite","setTTL(bytes32,uint64)":"23130","ttl(bytes32)":"579"}},"functionHashes":{"owner(bytes32)":"02571be3","resolver(bytes32)":"0178b8bf","setOwner(bytes32,address)":"5b0fc9c3","setResolver(bytes32,address)":"1896f70a","setSubnodeOwner(bytes32,bytes32,address)":"06ab5923","setTTL(bytes32,uint64)":"14ab9038","ttl(bytes32)":"16a25cbd"},"filename":"C:/dev/embark/lib/modules/ens/contracts/ENSRegistry.sol","type":"file","_gasLimit":false,"deploymentAccount":"0xB8D851486d1C953e31A44374ACa11151D49B8bb3"};
const ENSRegistry = new EmbarkJS.Blockchain.Contract(ENSRegistryConfig);

export default ENSRegistry;
