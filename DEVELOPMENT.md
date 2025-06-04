# Instuctions

## How to add a new single filter?
1. Add a new type to `frontend/meta/FieldType.ts::FieldType`
2. Add a new filter constructor to `frontend/src/filter-constructor/`
3. Add the new constructor to the `FILTER_CONSTRUCTORS` map in `frontend/src/filter-constructor/SingleFilterConstructor.svelte`
4. Bump frontend version in the `frontend/package.json`
5. Add the new type to `backend/cascade_filter/field_type.py`
6. Add a new field to `backend/cascade_filter/meta/field/`
7. Import the new field into `backend/cascade_filter/meta/field/__init__.py`
8. Add the dataclass, validator and deserializer of the new field into `backend/cascade_filter/filter/<field_type>`
9. In the folder of the new filter add the `__init__.py` file with imports of dataclass, validator and deserializer
10. Add the new field dataclass into `backend/cascade_filter/filter/__init__.py`
11. Add the new field deserializer into `backend/cascade_filter/filter/multi/deserializer.py`
12. Add the new field deserializer into `backend/cascade_filter/filter/deserialization.py`
13. Add the new field validator into `backend/cascade_filter/filter/multi/validator.py`
14. Add the new field validator into `backend/cascade_filter/django/validation.py`
15. Add a query filter mixin into `backend/cascade_filter/django/filter/<field_type>_filter_mixin.py`
16. Add the new query filter to `backend/cascade_filter/django/filter/single_filter_mixin.py`
17. Add the new filter to `backend/cascade_filter/compliance_checker/checker.py`
18. Bump package version in the `backend/pyproject.toml`
19. Test the new filter in the playground
